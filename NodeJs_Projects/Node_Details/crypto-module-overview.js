// Node.js Crypto Module Overview

// Require the crypto module
const crypto = require('crypto');

// Hash Functions
// Creating a Hash
const hash = crypto.createHash('sha256')
  .update('Hello, Node.js!')
  .digest('hex');
console.log('SHA-256 Hash:', hash);

// Password Security
// Hashing Passwords
function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.scryptSync(password, salt, 64).toString('hex');
  return { salt, hash };
}

function verifyPassword(password, salt, hash) {
  const hashedPassword = crypto.scryptSync(password, salt, 64).toString('hex');
  return hashedPassword === hash;
}

// HMAC (Hash-based Message Authentication Code)
// Creating an HMAC
const secretKey = 'mySecretKey';
const hmac = crypto.createHmac('sha256', secretKey);
hmac.update('Hello, World!');
const hmacDigest = hmac.digest('hex');
console.log('HMAC:', hmacDigest);

// Symmetric Encryption
// AES (Advanced Encryption Standard)
function encrypt(text, key) {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return { iv: iv.toString('hex'), encryptedData: encrypted };
}

function decrypt(encryptedData, iv, key) {
  const decipher = crypto.createDecipheriv('aes-256-cbc', key, Buffer.from(iv, 'hex'));
  let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

// Asymmetric Encryption
// RSA (Rivest-Shamir-Adleman)
function generateKeyPair() {
  return crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: {
      type: 'spki',
      format: 'pem'
    },
    privateKeyEncoding: {
      type: 'pkcs8',
      format: 'pem'
    }
  });
}

function encryptWithPublicKey(text, publicKey) {
  const buffer = Buffer.from(text, 'utf8');
  const encrypted = crypto.publicEncrypt({
    key: publicKey,
    padding: crypto.constants.RSA_PKCS1_OAEP_PADDING
  }, buffer);
  return encrypted.toString('base64');
}

// Digital Signatures
// Signing a Message
function signMessage(message, privateKey) {
  const sign = crypto.createSign('RSA-SHA256');
  sign.update(message);
  const signature = sign.sign(privateKey, 'hex');
  return signature;
}

// Example usage
const password = 'myPassword';
const { salt, hash } = hashPassword(password);
console.log('Salt:', salt);
console.log('Hash:', hash);

const text = 'Hello, World!';
const key = crypto.randomBytes(32);
const encrypted = encrypt(text, key);
console.log('Encrypted:', encrypted);

const decrypted = decrypt(encrypted.encryptedData, encrypted.iv, key);
console.log('Decrypted:', decrypted);

const keyPair = generateKeyPair();
console.log('Public Key:', keyPair.publicKey);
console.log('Private Key:', keyPair.privateKey);

const encryptedWithPublicKey = encryptWithPublicKey(text, keyPair.publicKey);
console.log('Encrypted with Public Key:', encryptedWithPublicKey);

const signature = signMessage(text, keyPair.privateKey);
console.log('Signature:', signature);