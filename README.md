# Todo Database With Express, Mongoose, Node Js.
Building Web Service & RESTful API for ToDoList with Express and Sequalize

# Getting Start
Persiapkan software yang diperlukan seperti telah menginstal Node.js, Express, dan Mongoose.
1. Inisialisasi proyek Node.js dengan ```npm init.```
2. Instal Express dengan perintah ```npm install express.```
3. Instal Mongoose dengan perintah ```npm install mongoose.```
4. Siapkan struktur project yang dibuat dengan folder, file, dan struktur yang sesuai.

# Features
- Login
- Membuat todo baru
- Melihat semua todo
- Melihat detail todo
- Mengubah todo
- Menghapus todo
- Menghapus semua todo

# Login
# Endpoint Login 
Berikut endpoint untuk login:
```POST /auth/login```

# User
# Data User
Struktur data User sebagai berikut :
- ```username```: String
- ```email```: String
- ```password```: String
# Endpoint User
- ```GET /users```: Mendapatkan semua user.
- ```GET /users/:id```: Mendapatkan user berdasarkan ID.
- ```GET /users/:id/todos```: Mendapatkan todos user berdasarkan ID.
- ```POST /users```: Membuat user baru.
- ```DELETE /users/:id```: Menghapus user berdasarkan ID.
- ```DELETE /users```: Menghapus semua user.

# Todo
# Data Todo
Struktur data User sebagai berikut :
- ```value```: String (Nilai dari todo)
- ```status```: Boolean (Status todo, default: false)
- ```userId```: ID pengguna yang didapatkan dari foreign key model User
# Endpoint User
- ```GET /todos```: Mendapatkan semua todos.
- ```GET /todos/:id```: Mendapatkan todo berdasarkan ID.
- ```POST /todos```: Membuat todo baru.
- ```DELETE /todos/:id```: Menghapus todo berdasarkan ID.
- ```DELETE /todos```: Menghapus semua todos.
- ```PUT /todos/:id```: Mengedit todo.
