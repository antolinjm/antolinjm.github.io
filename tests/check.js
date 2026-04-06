#!/usr/bin/env node
/**
 * Pre-commit checks for antolinjm.github.io
 *
 * 1. i18n key parity — EN and ES must have identical key sets
 * 2. data-i18n resolution — every key used in HTML exists in EN translations
 * 3. Tool file existence — every tools/*.html link in index.html is on disk
 *
 * Zero external dependencies. Run with: node tests/check.js
 */

const vm   = require('vm');
const fs   = require('fs');
const path = require('path');

const ROOT   = path.resolve(__dirname, '..');
let   passed = true;

function fail(msg) { console.error('  FAIL  ' + msg); passed = false; }
function ok(msg)   { console.log ('  ok    ' + msg); }

// ── 1. Load translations via vm (no DOM needed) ─────────────────────────────

const i18nSrc = fs.readFileSync(path.join(ROOT, 'js/i18n.js'), 'utf8');

const ctx = vm.createContext({
  window:       { setLang: null },
  document:     { querySelectorAll: () => ({ forEach: () => {} }),
                  documentElement:  { lang: '' },
                  addEventListener: () => {} },
  localStorage: { setItem: () => {}, getItem: () => null },
});

// Expose the private `translations` variable to the vm context
const patched = i18nSrc.replace('var translations = ', 'globalThis.__t = ');
vm.runInContext(patched, ctx);

const translations = ctx.__t;
if (!translations || !translations.en || !translations.es) {
  fail('Could not load translations from js/i18n.js — aborting.');
  process.exit(1);
}

// ── 2. Key parity: EN ↔ ES ──────────────────────────────────────────────────

function collectLeafKeys(obj, prefix) {
  const keys = [];
  for (const k of Object.keys(obj)) {
    const full = prefix ? prefix + '.' + k : k;
    if (obj[k] !== null && typeof obj[k] === 'object') {
      keys.push(...collectLeafKeys(obj[k], full));
    } else {
      keys.push(full);
    }
  }
  return keys;
}

const enKeys = new Set(collectLeafKeys(translations.en, ''));
const esKeys = new Set(collectLeafKeys(translations.es, ''));

const missingInEs = [...enKeys].filter(k => !esKeys.has(k));
const missingInEn = [...esKeys].filter(k => !enKeys.has(k));

if (missingInEs.length === 0 && missingInEn.length === 0) {
  ok(`i18n: EN and ES are in sync (${enKeys.size} keys each)`);
} else {
  missingInEs.forEach(k => fail(`i18n: missing in ES — "${k}"`));
  missingInEn.forEach(k => fail(`i18n: missing in EN — "${k}"`));
}

// ── 3. data-i18n keys in HTML resolve against EN translations ───────────────

function resolve(obj, dotPath) {
  return dotPath.split('.').reduce((o, k) => (o != null ? o[k] : undefined), obj);
}

const HTML_FILES = ['index.html'];
for (const file of HTML_FILES) {
  const html    = fs.readFileSync(path.join(ROOT, file), 'utf8');
  const matches = [...html.matchAll(/data-i18n(?:-placeholder)?="([^"]+)"/g)];
  const broken  = matches.map(([, k]) => k).filter(k => resolve(translations.en, k) === undefined);

  if (broken.length === 0) {
    ok(`data-i18n: all ${matches.length} keys in ${file} resolve`);
  } else {
    broken.forEach(k => fail(`data-i18n: key not found in EN — "${k}" (${file})`));
  }
}

// ── 4. Tool files referenced in HTML exist on disk ──────────────────────────

const indexHtml = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const toolLinks = [...indexHtml.matchAll(/href="(tools\/[^"]+\.html)"/g)];

for (const [, href] of toolLinks) {
  const abs = path.join(ROOT, href);
  if (fs.existsSync(abs)) {
    ok(`tool file: ${href}`);
  } else {
    fail(`tool file missing: ${href}`);
  }
}

// ── Result ───────────────────────────────────────────────────────────────────

console.log('');
if (passed) {
  console.log('All checks passed.');
} else {
  console.error('One or more checks failed.');
  process.exit(1);
}
