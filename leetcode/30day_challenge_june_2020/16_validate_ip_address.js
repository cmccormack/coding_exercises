const timeit = require("../../utils/timeit");

/*
Write a function to check whether an input string is a valid IPv4 address or 
IPv6 address or neither.

IPv4 addresses are canonically represented in dot-decimal notation, which 
consists of four decimal numbers, each ranging from 0 to 255, separated by 
dots ("."), e.g.,172.16.254.1;

Besides, leading zeros in the IPv4 is invalid. For example, the address 
172.16.254.01 is invalid.

IPv6 addresses are represented as eight groups of four hexadecimal digits, 
each group representing 16 bits. The groups are separated by colons (":"). 
For example, the address 2001:0db8:85a3:0000:0000:8a2e:0370:7334 is a valid 
one. Also, we could omit some leading zeros among four hexadecimal digits 
and some low-case characters in the address to upper-case ones, so 
2001:db8:85a3:0:0:8A2E:0370:7334 is also a valid IPv6 address
(Omit leading zeros and using upper cases).

However, we don't replace a consecutive group of zero value with a single 
empty group using two consecutive colons (::) to pursue simplicity. For 
example, 2001:0db8:85a3::8A2E:0370:7334 is an invalid IPv6 address.

Besides, extra leading zeros in the IPv6 is also invalid. For example, the 
address 02001:0db8:85a3:0000:0000:8a2e:0370:7334 is invalid.

Note: You may assume there is no extra space or special characters in the 
input string.

Example 1:
Input: "172.16.254.1"

Output: "IPv4"

Explanation: This is a valid IPv4 address, return "IPv4".
Example 2:
Input: "2001:0db8:85a3:0:0:8A2E:0370:7334"

Output: "IPv6"

Explanation: This is a valid IPv6 address, return "IPv6".
Example 3:
Input: "256.256.256.256"

Output: "Neither"

Explanation: This is neither a IPv4 address nor a IPv6 address.
*/


var validIPv4Address = function(IP) {
  let octets = IP.split('.')
  if (octets.length !== 4 || octets.includes('')) return "Neither"
  for (let octet of octets) {
    const str = octet
    octet = Number(octet)
    if (isNaN(octet) || octet < 0 || octet > 2**8-1 || (str.length > 1 && str[0] === '0')) return "Neither"
  }
  return "IPv4"
}
var validIPv6Address = function(IP) {
  let hextets = IP.split(':')
  if (hextets.length !== 8 || hextets.includes('')) return "Neither"
  for (let hextet of hextets) {
    const str = hextet
    hextet = Number(`0x${hextet}`)
    if (isNaN(hextet) || hextet < 0 || hextet > 2**16-1 || str.length > 4) return "Neither"
  }
  return "IPv6"
}

/**
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function(IP) {
  if (IP.includes('e') || IP.includes('x') || IP.includes('-')) return "Neither"
  if (IP.includes('.')) return validIPv4Address(IP)
  if (IP.includes(':')) return validIPv6Address(IP)
  return 'Neither'
};

timeit(validIPAddress, 'IPv4', "172.16.254.1")
timeit(validIPAddress, 'IPv6', "2001:0db8:85a3:0:0:8A2E:0370:7334")
timeit(validIPAddress, 'Neither', "256.256.256.256")
timeit(validIPAddress, 'Neither', "1e1.4.5.6")
timeit(validIPAddress, 'Neither', "1.0.1.")
timeit(validIPAddress, 'Neither', "01.01.01.01")
timeit(validIPAddress, 'IPv4', "172.16.254.1")
timeit(validIPAddress, 'Neither', "2001:0db8:85a3:00000:0:8A2E:0370:7334")
timeit(validIPAddress, 'Neither', "15.16.-0.1")
timeit(validIPAddress, 'IPv4', "192.0.0.1")