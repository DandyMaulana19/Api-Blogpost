# API Blogpost

API-Blogpost adalah sebuah REST API yang dikembangkan menggunakan **Express.js** dan **PostgreSQL**, serta dikelola dengan **Prisma ORM**. Proyek ini berjalan dalam lingkungan **Docker**.

## 🚀 Fitur
- CRUD Postingan Blog
- Manajemen User
- Database PostgreSQL dengan Prisma ORM
- Dikemas dalam Docker

## 🛠 Teknologi yang Digunakan
- **Node.js & Express.js** - Backend framework
- **PostgreSQL** - Database
- **Prisma ORM** - Manajemen database
- **Docker & Docker Compose** - Containerization
- **pgAdmin** - Database Admin UI

---

## 📦 Instalasi dan Menjalankan Proyek

### **1. Clone Repository**
```sh
git clone https://github.com/DandyMaulana19/Api-Blogpost.git
cd Api-Blogpost
```

### **2. Konfigurasi Environment**
Buat file `.env.development` dan `.env.production` berdasarkan contoh di `.env.example`:
```env
DATABASE_URL="<your-database-url>"
```
> Gantilah `<your-database-url>` dengan koneksi PostgreSQL yang sesuai.

### **3. Menjalankan dengan Docker**
```sh
docker-compose up --build
```
Akses API di: [http://localhost:3100](http://localhost:3100)

### **4. Menjalankan Migrasi Prisma**
```sh
docker exec -it api-blogpost-app-1 sh
npx prisma migrate deploy
exit
```

### **5. Mengakses Database dengan pgAdmin**
Jika menggunakan **pgAdmin** di Docker, akses melalui:
```sh
http://localhost:5050
```
Gunakan credential berikut:
- **Email**: `admin@example.com`
- **Password**: `admin`

Tambahkan server baru dengan:
- **Host**: `db`
- **Port**: `5432`
- **Username**: `<your-db-username>`
- **Password**: `<your-db-password>`

---

## 🔥 API Endpoint

### **1. Postingan Blog**
| Method | Endpoint | Deskripsi |
|--------|---------|-----------|
| `GET` | `/posts` | Mendapatkan semua post |
| `POST` | `/posts` | Membuat post baru |
| `PUT` | `/posts/:id` | Update post |
| `DELETE` | `/posts/:id` | Hapus post |

---

## 🎯 Todo List
- [ ] Menambahkan fitur komentar
- [ ] Menambahkan pagination pada daftar post
- [ ] Menambahkan caching dengan Redis

---

## 🤝 Kontribusi
Jika ingin berkontribusi, silakan fork repository ini dan buat pull request!

---

## 📄 Lisensi
MIT License - Silakan gunakan dan modifikasi sesuai kebutuhan.

---

**Dibuat oleh [Dandy Maulana](https://github.com/DandyMaulana19)** 🚀  
