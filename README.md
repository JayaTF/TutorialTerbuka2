# Tutorial Terbuka — Siap GitHub Pages

Proyek React + Vite ini telah dikonfigurasi untuk deployment otomatis ke GitHub Pages.

## Langkah deployment (tanpa Terminal)

1. Unduh ZIP ini dan ekstrak.
2. Buka https://github.com lalu buat repository bernama **tutorial-terbuka**.
3. Pilih repository **Public** (untuk penggunaan GitHub Pages gratis pada repository publik).
4. Pada halaman repository, klik **Add file → Upload files**.
5. Unggah **isi folder hasil ekstraksi**, bukan file ZIP-nya. Pastikan `package.json`, `index.html`, `vite.config.js`, `src/`, `public/`, dan `.github/` terlihat di root repository.
6. Klik **Commit changes** dan simpan ke branch `main`.
7. Buka **Settings → Pages**.
8. Pada bagian **Build and deployment**, pilih **GitHub Actions**.
9. Buka tab **Actions**, tunggu workflow “Deploy Tutorial Terbuka to GitHub Pages” selesai dengan status hijau.
10. Website akan tersedia di `https://USERNAME.github.io/tutorial-terbuka/` (ganti USERNAME dengan username GitHub kamu).

## Penting
- Nama repository harus `tutorial-terbuka`, karena `vite.config.js` memakai `base: '/tutorial-terbuka/'`.
- Jika memilih nama repository lain, ubah nilai `base` di `vite.config.js` agar sama dengan `'/NAMA-REPOSITORY/'`.
- Untuk repository public, GitHub Pages tersedia gratis. Pengaturan dan kebijakan GitHub dapat berubah.
- Domain sendiri belum dikonfigurasi; domain khusus perlu dimiliki dan diatur terpisah.
- Video YouTube belum dimasukkan karena URL video channel spesifik belum diverifikasi.
- Materi contoh sudah tersedia dan dapat diedit melalui `src/data/content.js`.
- Latihan soal bekerja di browser, tanpa database/login.
- Build dan deployment otomatis dilakukan GitHub Actions setelah commit ke `main`.

## Menambah materi dan soal
Baca bagian panduan lengkap di bawah atau lihat komentar di `src/data/content.js`. Setiap materi ditambahkan ke array `materials`, soal ke `quizzes`, dan video terverifikasi ke `videos`.
