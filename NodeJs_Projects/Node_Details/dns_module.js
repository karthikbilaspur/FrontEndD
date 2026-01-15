// Node.js DNS Module Overview

// Require the dns module
const dns = require('dns');
const { promises: dnsPromises } = require('dns');

// DNS Lookup
// dns.lookup()
dns.lookup('example.com', (err, address, family) => {
  if (err) throw err;
  console.log('IP Address:', address);
  console.log('Address Family:', family);
});

// dns.lookup() with options
dns.lookup('example.com', { hints: dns.V4MAPPED, family: 4, all: true }, (err, addresses) => {
  if (err) throw err;
  console.log('IPv4 Addresses:', addresses);
});

// Promise-Based DNS Lookup
async function dnsLookup() {
  try {
    const address = await dnsPromises.lookup('example.com');
    console.log('IP Address:', address.address);
  } catch (err) {
    console.error(err);
  }
}

dnsLookup();

// DNS Resolution
// dns.resolve()
dns.resolve('example.com', 'A', (err, records) => {
  if (err) throw err;
  console.log('A Records:', records);
});

// dns.resolve4()
dns.resolve4('example.com', (err, addresses) => {
  if (err) throw err;
  console.log('IPv4 Addresses:', addresses);
});

// dns.resolve6()
dns.resolve6('example.com', (err, addresses) => {
  if (err) throw err;
  console.log('IPv6 Addresses:', addresses);
});

// Reverse DNS Lookup
// dns.reverse()
dns.reverse('93.184.216.34', (err, hostnames) => {
  if (err) throw err;
  console.log('Hostnames:', hostnames);
});

// DNS Server Management
// dns.getServers()
console.log('DNS Servers:', dns.getServers());

// dns.setServers()
dns.setServers(['8.8.8.8', '8.8.4.4']);
console.log('DNS Servers:', dns.getServers());

// DNS Record Types
// dns.resolveA()
dns.resolveA('example.com', (err, records) => {
  if (err) throw err;
  console.log('A Records:', records);
});

// dns.resolveCname()
dns.resolveCname('www.example.com', (err, records) => {
  if (err) throw err;
  console.log('CNAME Records:', records);
});

// dns.resolveMx()
dns.resolveMx('example.com', (err, records) => {
  if (err) throw err;
  console.log('MX Records:', records);
});

// dns.resolveNs()
dns.resolveNs('example.com', (err, records) => {
  if (err) throw err;
  console.log('NS Records:', records);
});

// dns.resolveTxt()
dns.resolveTxt('example.com', (err, records) => {
  if (err) throw err;
  console.log('TXT Records:', records);
});

// dns.resolveSrv()
dns.resolveSrv('example.com', (err, records) => {
  if (err) throw err;
  console.log('SRV Records:', records);
});

// dns.resolvePtr()
dns.resolvePtr('93.184.216.34', (err, records) => {
  if (err) throw err;
  console.log('PTR Records:', records);
});

// dns.resolveNaptr()
dns.resolveNaptr('example.com', (err, records) => {
  if (err) throw err;
  console.log('NAPTR Records:', records);
});

// dns.resolveSoa()
dns.resolveSoa('example.com', (err, records) => {
  if (err) throw err;
  console.log('SOA Records:', records);
});

// Error Handling
dns.lookup('non-existent-domain.com', (err, address, family) => {
  if (err) {
    console.error('Error:', err);
  } else {
    console.log('IP Address:', address);
  }
});

// Using Promises with async/await
async function dnsLookupWithErrorHandling() {
  try {
    const address = await dnsPromises.lookup('example.com');
    console.log('IP Address:', address.address);
  } catch (err) {
    console.error('Error:', err);
  }
}

dnsLookupWithErrorHandling();