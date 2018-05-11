import { Base64 } from "js-base64";

export const fetchStockData = async (query) => {
  const parsedArray = []
  for (let i = 0; i < query.length; i++) {
    const authHeader = Base64.encode("52e61724b9142a68d319799faa97bab5:fd5dd23f3885587ddabef2caf815d1fa")
    const result = await fetch(`https://api.intrinio.com/companies?ticker=${query[i]}`, {
      headers: {
        Authorization: `Basic ${authHeader}`
      }
  
    });
    const parsed = await result.json()
    parsedArray.push(parsed)
  }
  return parsedArray
}

export const fetchMoreStockData = async (query) => {
  const authHeader = Base64.encode("52e61724b9142a68d319799faa97bab5:fd5dd23f3885587ddabef2caf815d1fa")
  const result = await fetch(`https://api.intrinio.com/prices?identifier=${query}`, {
    headers: {
      Authorization: `Basic ${authHeader}`
    }

  });
  const parsed = await result.json();
  return parsed.data[0]
}

export const fetchLastPrice = async (query) => {
  const parsedArray = []
  for (let i = 0; i < query.length; i++) {

  
    const authHeader = Base64.encode("52e61724b9142a68d319799faa97bab5:fd5dd23f3885587ddabef2caf815d1fa")
    const result = await fetch(`https://api.intrinio.com/data_point?identifier=${query[i]}&item=last_price`, {
      headers: {
        Authorization: `Basic ${authHeader}`
      }

    });
    const parsed = await result.json();
    parsedArray.push(parsed)
  }
  return parsedArray
}