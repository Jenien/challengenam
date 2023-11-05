# Panduan Penggunaan API

## 1. Registrasi

### Endpoint:
- Method: POST
- URL: http://localhost:1202/api/v1/authenticate/register

### Headers:
- Content-Type: Application/json

### Body:
- nama: string
- email: string@gmail.com (email harus unik)
- password: string
- password_confirmation: string (sama dengan password)

## 2. Login

### Endpoint:
- Method: POST
- URL: http://localhost:1202/api/v1/authenticate/login

### Headers:
- Content-Type: Application/json

### Body:
- email: string@gmail.com
- password: string

## 3. Unggah Gambar (Input Artwork)

### Endpoint:
- Method: PUT
- URL: http://localhost:1202/api/v1/artwork/upload

### Headers:
- Auth Bearer (Token didapatkan dari Login)
- Content-Type: multipart/form-data

### Body:
- title: string
- description: string
- imageArt: gambar/jpg/jpeg/image

## 4. Daftar Gambar

### Endpoint:
- Method: GET
- URL: http://localhost:1202/api/v1/artwork/list

### Headers:
- Auth Bearer (Token didapatkan dari Login)
- Content-Type: Application/json

## 5. Detail Gambar berdasarkan File ID

### Endpoint:
- Method: GET
- URL: http://localhost:1202/api/v1/artwork/view/{fileId}

### Headers:
- Auth Bearer (Token didapatkan dari Login)
- Content-Type: Application/json

## 6. Hapus Gambar berdasarkan File ID

### Endpoint:
- Method: DELETE
- URL: http://localhost:1202/api/v1/artwork/delete/{fileId}

### Headers:
- Auth Bearer (Token didapatkan dari Login)
- Content-Type: Application/json

## 7. Edit Isi Gambar berdasarkan File ID

### Endpoint:
- Method: PUT
- URL: http://localhost:1202/api/v1/artwork/edit/{fileId}

### Headers:
- Auth Bearer (Token didapatkan dari Login)
- Content-Type: Application/json

### Body:
- title: string
- description: string
