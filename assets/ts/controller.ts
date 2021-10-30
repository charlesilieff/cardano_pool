import { API_Url, TIMEOUT_SECONDS } from './config.js';

const timeout = function (s: number): Promise<Response> {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

const AJAX = async (url: string) => {
  const fetchPro = fetch(url);

  const res = await Promise.race([timeout(TIMEOUT_SECONDS), fetchPro]);

  const data: PoolData = await res.json();
  if (!res.ok) {
    throw new Error(`${data.message} (${res.status})`);
  }

  return data;
};

const widget = async () => {
  const dataPool = await AJAX(API_Url);
  console.log(dataPool);

  // Pour que le bouton copier marche
  navigator.clipboard.writeText(dataPool.data.pool_id); // browser copy

  document.querySelector('[data-name=pool-id]')?.prepend(dataPool.data.pool_id);
  document.querySelector('[data-name=pool-title]')?.append(dataPool.data.db_name);
  document.querySelector('[data-name=pool-updated]')?.append(dataPool.updated);
  document.querySelector('[data-name=pool-owners]')?.append(dataPool.data.owners.toString());
  document.querySelector('[data-name=pool-fees-margin]')?.append(dataPool.data.tax_ratio.toString() + '%');
  document.querySelector('[data-name=pool-fees-fixed]')?.append(dataPool.data.tax_fix.toString());
  document.querySelector('[data-name=pool-fees-real]')?.append(dataPool.data.tax_real.toString());
  document.querySelector('[data-name=pool-roa-actual]')?.append(dataPool.data.roa.toString());
  document.querySelector('[data-name=pool-roa-lifetime]')?.append(dataPool.data.roa_lifetime.toString());
  document.querySelector('[data-name=pool-delegators]')?.append(dataPool.data.delegators.toString());
};

widget();
