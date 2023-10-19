<div align="center">
  <h1>	Software Requirements Specification </h1>
  <h1>	Snack Sales Platform for College Students </h1>
  <h2>	Version 1.0 approved </h2>
  <h2>	Prepared by : </h2>

  <p>	22091397006 - R.BG.Moch Faishal Reza </p>
  <p>	22091397032 - Farrel Yosan Navyansyah </p>
  <p>	22091397035 - Roy Nurfaza </p>

<p>	02/10/2023 </p>
</div>
	       
**Table of Contents**
1. 	Pendahuluan	

1.1	Tujuan Penulisan Dokumen	

1.2	Audien yang Dituju dan Pembaca yang Disarankan	

1.3	Batasan Produk	

1.4	Definisi dan Istilah	

1.5	Referensi	

2.	Deskripsi Keseluruhan	

2.1	Deskripsi Produk	

2.2	Fungsi Produk	

2.3	Penggolongan Karakterik Pengguna	

2.4	Lingkungan Operasi	

2.5	Batasan Desain dan Implementasi	

2.6	Dokumentasi Pengguna	

3.	Kebutuhan Antarmuka Eksternal	

3.1	User Interfaces	

3.2	Hardware Interface	

3.3	Software Interface	

3.4	Communication Interface	

4.	Functional Requirement	

4.1	Use Case Diagram	

4.2	Nama Use Case 1	

4.3	Nama Use Case 2	

4.4	Class Diagram	

5.	Non Functional Requirements	


**1. Pendahuluan**

1.1 Tujuan Penulisan Dokumen
	
Tujuan kelompok kami dalam penulisan dokumen ini adalah untuk memberikan suatu rancangan ide sebuah platform untuk mahasiswa Universitas Negeri Surabaya dalam penjualan makanan ringan sebagai bentuk usaha memudahkan para mahasiswa Universitas Negeri Surabaya yang ingin memasarkan produknya agar dapat terjual luas.


1.2 Audien yang Dituju dan Pembaca yang Disarankan

Dokumen ini ditujukan untuk kalangan remaja kisaran umur 18 tahun keatas. Audien yang akan dituju dalam konteks platform website ini adalah mahasiswa yang berniat menjual produk usahanya berupa produk buatan asli mahasiswa Universitas Negeri Surabaya.

1.3 Batasan Produk

Platform website penjualan produk mahasiswa adalah situs web yang dirancang khusus untuk memungkinkan mahasiswa untuk menjual produk mereka. Platform ini memfasilitasi transaksi jual beli antara mahasiswa.

1.3.1 Tujuan dari platform ini adalah:

a. Membantu mahasiswa untuk menjual produk-produk yang mereka hasilkan, seperti makanan, baju, bahkan kerajinan.

b. Menghasilkan penghasilan tambahan dan memberikan kesempatan bagi mahasiswa untuk menghasilkan uang tambahan dari penjualan produk buatan mereka, sehingga dapat membantu memenuhi kebutuhan finansial mereka.

c. Membangun komunitas di antara mahasiswa dengan memfasilitasi pertukaran barang dan mendukung usaha-usaha kecil yang dimiliki oleh mahasiswa.

1.3.2 Manfaat yang relevan dari platform ini meliputi:

a. Mendorong kreativitas mahasiswa untuk dapat mempromosikan produk buatan mereka atau produk-produk kreatif lainnya seperti kerajinan, mendukung pertumbuhan kreativitas mahasiswa.

b. Dapat dijadikan penghasilan sampingan bagi mahasiswa. Mahasiswa dapat menghasilkan penghasilan sampingan dari penjualan produk mereka di platform ini, yang dapat membantu kebutuhan mahasiswa.

c. Platform ini dapat membantu dalam mendukung usaha kecil dan ekonomi lokal dengan memberikan mahasiswa tempat untuk menjual produk-produk mereka.

1.3.3 Tujuan bisnis yang mungkin terkait dengan platform ini dapat mencakup:

a. Jika platform ini ditujukan untuk bisnis, maka tujuannya untuk menghasilkan keuntungan dari komisi atau biaya yang dikenakan pada penjual atau pembeli.

b. Tujuan juga berfokus pada pertumbuhan pengguna aktif di platform ini, yang dapat menjadi indikator keberhasilan dalam membangun komunitas mahasiswa yang kuat.

c. Developer atau admin selaku pembuat website yang mengoperasikan platform ini dapat mempertimbangkan untuk menambahkan layanan atau fitur tambahan untuk memperluas bisnis.

d. Mendukung mahasiswa dan ekosistem kreatif mereka dapat menjadi bagian dari strategi bisnis ini untuk menciptakan dampak positif dan menciptakan hubungan jangka panjang dengan komunitas mahasiswa.

1.4 Definisi dan Istilah

SRS	:	Software Requirements Specification, atau 
	   Spesifikasi Kebutuhan Perangkat Lunak (SKPL)

IEEE	:	Institute of Electrical and Electronics Engineering
		Standar internasional untuk pengembangan dan perancangan produk.

Platform	:	Sebuah wadah digital yang banyak dipakai manusia untuk berbagai macam keperluan

Website	:	Kumpulan halaman web yang saling terhubung dan dapat diakses melalui internet

1.5 Referensi
Nana Saharna, Kasman Ruku. “Perancangan Sistem E-Commerce Berbasis Web Pada Toko Indah Surya Furniture.” Jurnal Vokasional Teknik Elektronika dan Informatika, E - ISSN: 2302-3295 Vol. 7, No. 1(2019).

Muhammad Susilo, Rezki Kurniati, Kasmawi. “Rancang Bangun Website Toko Online Menggunakan Metode Waterfall.” Jurnal Nasional Informatika dan Teknologi Jaringan, E - ISSN: 2540-7600, P - ISSN: 2540-7597 Vol. 2, No. 2(2018).

Intan Anuggrah Yuandi, Siti Rahmawati Kahar, Arrum Purnama. “Perancangan Web E-Commerce Mahasiswa Berbasis Digital Marketing Untuk Menumbuhkan Jiwa Ekonomi Digital.” Jurnal Informatika Teknologi dan Sains, E - ISSN: 2686-3359 Vol. 5, No. 1(2023):183-190.


**2. Deskripsi Keseluruhan**

2.1 Deskripsi Produk 

Platform website penjualan produk mahasiswa adalah situs website yang dirancang khusus untuk memungkinkan mahasiswa dapat menjual produk mereka. Platform website ini memfasilitasi transaksi jual beli antar mahasiswa khususnya mahasiswa Universitas Negeri Surabaya. Mahasiswa yang ingin menjual produk mereka dapat menambahkan produk mereka ke dalam pemilihan menu jual produk, mahasiswa dapat menambahkan nama produk,foto serta menetapkan harga untuk dijual. Sebaliknya mahasiswa yang ingin membeli produk maka mahasiswa tersebut dapat memilih menu beli untuk melihat berbagai macam produk yang dijual oleh sesama mahasiswa Universitas Negeri Surabaya. 

2.2 Fungsi Produk 

Fungsi utama produk adalah memberikan fasilitas dan kemudahan bagi mahasiswa yang ingin menjual produk buatannya di website ini serta memudahkan mahasiswa lain untuk membeli produk yang dijual di website ini. Website ini harus memberikan pelayanan fasilitas yang baik dan memungkinkan mahasiswa untuk menyalurkan potensi produk mereka supaya dapat dijual dan memberikan keuntungan tersendiri bagi mahasiswa yang menjual produk tersebut serta memungkinkan mahasiswa yang ingin membeli produk yang bermanfaat di website ini. 

2.3 Penggolongan Karakterik Pengguna

Tabel Karakteristik Pengguna

| Kategori Pengguna             | Tugas          | Hak Akses Ke Aplikasi       | Kemampuan Yang Harus Dimiliki          |
|-------------------------------|----------------|-----------------------------|----------------------------------------|
|User/ Mahasiswa(Penjual Produk)|Jual produk, tambahkan gambar produk, tetapkan harga produk|Registrasi, login, cek produk terjual|Mengisi data registrasi yang sesuai|
|User/ Mahasiswa (Pembeli Produk)|Membeli produk, menambahkan ke ke keranjang|Melakukan registrasi, melakukan login, memantau produk yg dibeli|Mengisi data registrasi yang sesuai, melakukan pembayaran produk yang dibeli|
|Admin|Membuat website, maintenance dan upgrade sistem|Memberikan akses masuk untuk user, menyimpan data register,data login,dan riwayat login|Menyediakan kebutuhan fungsional sistem, menyediakan fasilitas menu pilihan jual/beli, Mengatur data register dan login, Mengecek data register dan login|

2.4 Lingkungan Operasi 

Website ini beroperasi pada lingkungan umum untuk kalangan mahasiswa. Website beroperasi khususnya di wilayah kampus Universitas Negeri Surabaya. Website ini dapat diakses oleh mahasiswa Universitas Negeri Surabaya. 


**3. Kebutuhan Antarmuka Eksternal**

3.1 User Interfaces 

User Interface dari website ini pada awalnya ada sebuah landing page aplikasi kami yang menampilan sebuah background makanan ringan lalu ada logo dari website kami juga, dan ada juga menu login dan register yang pada saat kita pencet tolmbolnya akanmenuju ke menu login awal ataupun register awal.

3.2 Hardware Interface

Pembuatan website tidak dikhususkan bagi siapapun karena website ini akan mudah dijangkau oleh siapapun yang menggunakan hardware low to high. Untuk menjangkau website ini tidak dibutuhkan spesifikasi yg tinggi dikarenakan pada umumnya pengguna atau user di kalangan kampus sudah memiliki perangkat dengan hardware yang lebih dari cukup untuk menjangkau atau membuka website ini.

3.3 Software Interface

Antarmuka perangkat lunak dari situs web penjualan camilan yang diimplementasikan dalam kode HTML dan CSS di atas adalah sebuah halaman web dengan header yang mencakup logo perusahaan, tombol "Login" dan "Register" di landing page, serta latar belakang yang menarik. Konten utama halaman terdiri dari pesan selamat dengan deskripsi yang menjelaskan layanan atau produk yang ditawarkan, semuanya ditampilkan secara rapi dan responsif. Antarmuka ini berfungsi sebagai tampilan depan situs web dan memungkinkan pengguna untuk mengakses layanan penjualan camilan dengan mudah melalui tombol-tombol Login dan Register di landing page.

3.4 Communication Interface

Antarmuka komunikasi dari situs web penjualan camilan (snack) yang diimplementasikan dalam kode HTML dan CSS di atas adalah berdasarkan protokol HTTP melalui peramban web pengguna. Ketika pengguna mengakses halaman web, permintaan HTTP dikirimkan ke server web untuk mengambil dan menampilkan konten halaman. Halaman web ini juga dapat menyediakan formulir elektronik yang memungkinkan pengguna mengirimkan pesan atau data melalui metode HTTP POST. Dalam konteks ini, antarmuka komunikasi terutama berfokus pada interaksi antara peramban web pengguna dan server web untuk menampilkan dan mengirimkan informasi terkait penjualan camilan. Keamanan komunikasi melalui protokol HTTPS dapat diterapkan untuk melindungi data sensitif dan transmisi aman.


**4. Functional Requirement**

Persyaratan fungsional adalah pernyataan tentang bagaimana suatu sistem harus berperilaku. Ini mendefinisikan apa yang harus dilakukan sistem untuk memenuhi kebutuhan atau harapan pengguna. Persyaratan fungsional dapat dianggap sebagai fitur yang dideteksi pengguna. Mereka berbeda dari persyaratan non-fungsional, yang menentukan bagaimana sistem harus bekerja secara internal (misalnya, kinerja, keamanan, dll.).

<Tulis Kebutuhan Fungsional / Functional Requirement disini>
Diawali dengan membuat daftar kebutuhan fungsional P/L, lengkap dengan ID dan penjelasan jika perlu. Bisa dibuat dalam bentuk tabel.

|      ID      |        Kebutuhan Fungsional       |            Penjelasan            |
|--------------|-----------------------------------|----------------------------------|
|              |                                   |                                  |
|              |                                   |                                  |
|              |                                   |                                  |
|              |                                   |                                  |
|              |                                   |                                  |


4.1 Use Case Diagram

![alt text](https://github.com/rbgmochfaishalreza/rbgmochfaishalreza.github.io/blob/master/assets/USECASE%20WEB%20KEL%207.jpg)

4.2 Deskripsi Use Case 
	
Dalam use case diagram diatas dijelaskan  bahwa user dapat melakukan login, register untuk registrasi, menjual produk untuk penjual, dan membeli produk untuk pembeli. Admin dapat mengatur data login user, menyimpan data login user, menyimpan data produk dijual dan terjual, maintenance dan upgrade sistem. 

4.3 Flowchart

4.3.1 Flowchart User

![alt text](https://github.com/rbgmochfaishalreza/rbgmochfaishalreza.github.io/blob/master/assets/FLOW%20USER%20KEL%207.png)

4.3.2 Deskripsi Flowchart User

Untuk penjelasan pada flowchart yang akan dilakukan oleh user adalah pertama tama pastinya terdapat start untuk masuk kedalam website penjualan kita. Setelah itu akan ada pertanyaan sudah memiliki akun atau belum, jika sudah bisa melanjutkan ke menu login untuk memasukkan data yang digunakan pada saat mendaftar/register, jika belum memiliki akun user diharapkan memilih menu register yang akan menuntun user mengisikan data data yang diperlukan untuk registrasi. Setelah proses register sudah selesai, user akan kembali ke menu login untuk memasukkan data yang sudah diregistrasikan di awal. Setelah itu berhasil akan menuju atau masuk ke halaman beranda, di dalam halaman beranda terdapat menu pilihan yaitu jual/beli. Jika ingin menjual produk maka kita akan pilih jual lalu mengisikan nama produk, foto produk, harga produk dll. Jika kita memilih untuk membeli produk dari seseorang maka silahkan pilih menu beli, nantinya akan masuk kedalam menu beli untuk membeli produk yang tersedia di dalam toko-toko yang ada, lalu jika sudah menemukan barang yang pas untuk dibeli dapat ditambahkan ke keranjang lalu akan memproses pembayaran, selesai.

4.3.3 Flowchart Admin

![alt text](https://github.com/rbgmochfaishalreza/rbgmochfaishalreza.github.io/blob/master/assets/FLOW%20ADMIN%20KEL%207.png)
 
4.3.4 Deskripsi Flowchart Admin

Flowchart untuk admin, dimulai dari start lalu kita sebagai admin akan membuat website yang berkaitan tentang hal yang akan kita buat. Setelah itu kita selain membuat website juga menyediakan kebutuhan fungsional sistem, kemudian menyediakan fasilitas bagi user penjual/pembeli. Lalu kita menyimpan data register user, setelah itu mengatur data user. Kemudian kita memisahkan data register dan login. Jika belum register kita memberikan fitur membuat dan memasukkan data register lalu menyimpan data register, mengecek data register user, dan memberikan akses masuk ke website. Jika sudah bisa mengecek data register danmemberikan akses masuk ke website, setelah itu memberikan fitur pilihan jual/beli. Setelah itu semua sudah selesai admin akan menyimpan data produk dijual dan terjual, lalu menyimpan riwayat login user. Jika sistem dalam perbaikan akan maintenance dan upgrade sistem, end.


**5. Non Functional Requirements**

Persyaratan non-fungsional, sering disingkat NFR, melengkapi persyaratan fungsional dengan menentukan bagaimana sistem perangkat lunak harus menjalankan fungsi tertentu. Developer mendefinisikan kualitas, karakteristik, dan batasan sistem, bukan fitur spesifiknya. Intinya, persyaratan non-fungsional menetapkan standar kinerja, keamanan, dan kegunaan sistem.

Karakteristik Persyaratan Non Fungsional

Persyaratan non-fungsional menunjukkan karakteristik berikut:
- Kualitatif: Berbeda dengan persyaratan fungsional, yang biasanya bersifat kuantitatif, persyaratan non-fungsional berfokus pada aspek kualitatif seperti kinerja, keandalan, dan keamanan.
- Global: Persyaratan non-fungsional berlaku untuk keseluruhan sistem dan berdampak pada perilakunya secara keseluruhan.
- Stabilitas: Mereka umumnya lebih stabil sepanjang siklus hidup proyek, dengan perubahan yang lebih jarang terjadi dibandingkan dengan persyaratan fungsional.
- Dapat diukur: Meskipun persyaratan non-fungsional mungkin sulit untuk diukur secara tepat, persyaratan tersebut masih dapat diukur dan diuji.

|      ID      |          Parameter          |              Kebutuhan              |
|--------------|-----------------------------|-------------------------------------|
|1|Kinerja|Kinerja website dalam merespon dapat bekerja dengan maksimal dengan memberikan waktu respon yang cepat. Kapasitas dalam pembuatan website ini juga efektif untuk digunakan pengguna dalam waktu 24 jam dan berfungsi setiap hari. Efisiensi website harus dapat dioptimalkan sesuai server|
|2|Keamanan|Website dapat memiliki fitur perlindungan data atau informasi pribadi. Informasi pribadi pengguna dan data transaksi harus dienkripsi dan dilindungi dengan baik untuk mencegah akses-akses yang terlarang. Sistem pada website harus memiliki kontrol otentikasi dan otorisasi yang kuat dan tingkat akses pengguna yang sesuai.|
|3|Scalability|Website harus dapat meningkatkan kemampuan atau fitut-fiturnya. Website harus dapat dengan mudah ditingkatkan untuk mengakomodasi pertumbuhan pengguna dan produk yang lebih besar.|
|4|Pengalaman Pengguna(User Experience)|Website harus memiliki navigasi yang mudah. Website harus memiliki interface yang mudah dinavigasi, dengan pencarian yang efisien dan filter produk yang baik. Website harus memiliki kecepatan dan keterbacaan dengan baik. Halaman website harus dimuat dengan cepat, dan harus mudah dibaca dan dimengerti. Website harus memiliki desain yang menarik dan mengundang pengguna untuk menjelajah dan berbelanja.|
|5|Kualitas dan Ketersediaan Data|Memastikan data produk mulai dari nama produk, harga produk, dan ketersediaan produk atau tidaknya harus diperbarui secara real time untuk menghindari kesalahan dalam pemesanan maupun penjualan yang dilakukan oleh pengguna.|
|6|Bahasa|Pengguanaan bahasa dalam website menggunakan bahasa Indonesia dan ada beberapa sebagian menggunakan bahasa Inggris.|

Catatan : Memahami serta memenuhi persyaratan non-fungsional ini akan membantu memastikan bahwa website jual beli makanan/snack dapat memberikan pengalaman yang baik dan aman bagi pengguna, serta dapat terus berkembang untuk kedepannya. 

# Kelompok-7-Web

**PENJELASAN HTML**

Note : Dalam README di GitHub tanda kurang dari/&lt; dan lebih dari/&gt; pada awal serta akhir tag HTML, Markdown akan menganggapnya sebagai kode HTML atau tag HTML, dan itu tidak akan ditampilkan secara harfiah pada halaman GitHub. Sebagai contoh, jika menulis &lt;p&gt; di dalam README, Markdown akan menganggapnya sebagai tag paragraf HTML dan tidak akan menampilkannya sebagai teks &lt;p&gt; yang sebenarnya.

Untuk menampilkan tanda &lt; dan &gt; secara harfiah dalam README di GitHub, maka perlu menggantikannya dengan menggunakan karakter khusus HTML atau entity HTML. Maka:

&lt; dapat digantikan dengan menuliskan & lalu l lalu t dan terakhir;

&gt; dapat digantikan dengan menuliskan & lalu g lalu t dan terakhir;

Tulis dengan urut dan benar. 

**PENJELASAN INDEX HTML :**


1. Pertama ada &lt;!1DOCTYPE html&gt; : Semua dokumen HTML harus dimulai dengan <!DOCTYPE>deklarasi. Deklarasi ini bukan tag HTML. Ini adalah "informasi" ke browser tentang jenis dokumen apa yang diharapkan.

2. Selanjutnya ada &lt;html lang="en"&gt; : Tag pembuka untuk elemen HTML utama dengan atribut lang yang menentukan bahasa dokumen (dalam hal ini menggunakan bahasa Inggris).

3. &lt;head&gt; : Ini adalah elemen kepala dokumen HTML, yang berisi meta-informasi dan referensi ke berkas-berkas eksternal seperti CSS dan JavaScript.

4. &lt;meta charset="UTF-8"&gt; : Ini mengatur karakter encoding dokumen HTML ke UTF-8, yang umumnya digunakan untuk mendukung karakter internasional.

5. &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt; : Ini mengatur tampilan responsif pada perangkat berbasis web, seperti ponsel, dengan mengatur skala awal dan lebar tampilan.

6. &lt;title&gt;Landing Page&lt;/title&gt; : Ini adalah judul halaman yang akan ditampilkan di bilah judul browser.

7. &lt;link rel="stylesheet" href="style.css"&gt; : Ini adalah tautan ke berkas CSS eksternal dengan atribut href yang menghubungkan halaman HTML ke berkas "style.css" yang akan mengatur tampilan dan gaya halaman.

8. &lt;body&gt; : Ini adalah elemen tubuh halaman yang berisi konten utama yang akan ditampilkan di halaman web.

9. &lt;header&gt; : Ini adalah elemen header yang umumnya digunakan untuk menampilkan bagian atas halaman web yang berisi elemen-elemen seperti logo, navigasi, dan lainnya.

10. &lt;div class="logo"&gt; : Ini adalah div dengan kelas "logo" yang digunakan untuk mengelompokkan elemen logo perusahaan.

11. &lt;img src="assets/logo.png" alt="logo perusahaan" class="logo-image"&gt; : Ini adalah elemen gambar yang menampilkan logo perusahaan dengan sumber gambar "assets/logo.png" dan atribut alternatif (alt) yang digunakan untuk teks pengganti jika gambar tidak dapat ditampilkan.

12. &lt;div class="login-register"&gt; : Ini adalah div dengan kelas "login-register" yang digunakan untuk mengelompokkan elemen-elemen tautan "Login" dan "Register".

13. &lt;a href="login.html"&gt;Login&lt;/a&gt; : Ini adalah tautan "Login" yang mengarahkan ke halaman "login.html".

14. &lt;a href="register.html"&gt;Register&lt;/a&gt; : Ini adalah tautan "Register" yang mengarahkan ke halaman "register.html".

15. &lt;div class="content"&gt; : Ini adalah div dengan kelas "content" yang digunakan untuk mengelompokkan konten utama halaman.

16. &lt;div class="left"&gt; : Ini adalah div dengan kelas "left" yang digunakan untuk mengelompokkan konten yang berada di sisi kiri halaman.

17. &lt;h1&gt;Hello Food Buddy&lt;/h1&gt; : Ini adalah judul besar yang menampilkan teks "Hello Food Buddy".

18. &lt;p&gt;Do you want a snack? Or you want to order something?&lt;/p&gt; : Ini adalah paragraf yang berisi teks "Do you want a snack? Or you want to order something?" yang akan ditampilkan di halaman sebagai deskripsi atau isi konten.



**PENJELASAN HTML LOGIN PAGE :** 

1. Pertama ada &lt;!1DOCTYPE html&gt; : Semua dokumen HTML harus dimulai dengan <!DOCTYPE>deklarasi. Deklarasi ini bukan tag HTML. Ini adalah "informasi" ke browser tentang jenis dokumen apa yang diharapkan.

2. Selanjutnya ada &lt;html lang="en"&gt; : Tag pembuka untuk elemen HTML utama dengan atribut lang yang menentukan bahasa dokumen (dalam hal ini menggunakan bahasa Inggris).

3. &lt;head&gt; : Ini adalah elemen kepala dokumen HTML, yang berisi meta-informasi dan referensi ke berkas-berkas eksternal seperti CSS dan JavaScript.

4. &lt;meta charset="UTF-8"&gt; : Ini mengatur karakter encoding dokumen HTML ke UTF-8, yang umumnya digunakan untuk mendukung karakter internasional.

5. &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt; : Meta tag ini digunakan untuk mengatur kompatibilitas dengan Internet Explorer (versi terbaru).

6. &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt; : Ini mengatur tampilan responsif pada perangkat berbasis web, seperti ponsel, dengan mengatur skala awal dan lebar tampilan.

7. &lt;title&gt;Login Page&lt;/title&gt; : Ini adalah judul halaman yang akan ditampilkan di bilah judul browser.

8. &lt;link rel="stylesheet" href="login.css"&gt; : Ini adalah tag &lt;link"&gt; yang menghubungkan dokumen ke berkas CSS eksternal bernama "login.css" untuk mengatur tampilan halaman.

9. &lt;body&gt; : Ini adalah elemen tubuh halaman yang berisi konten utama yang akan ditampilkan di halaman web.

10. &lt;div class="container"&gt; : Ini adalah div dengan kelas "container" yang digunakan untuk mengelompokkan konten halaman.

11. &lt;div class="login"&gt; : Ini adalah div dengan kelas "login" yang digunakan untuk mengelompokkan elemen-elemen yang berkaitan dengan formulir login.

12. &lt;form action="home.html"&gt; : Ini adalah elemen form dengan atribut action yang menunjukkan ke halaman "home.html" yang akan diarahkan jika formulir tersebut disubmit.

13. &lt;h1&gt;Login&lt;/h1&gt; : Ini adalah judul besar yang menampilkan teks "Login".

14. &lt;hr&gt; : Ini adalah elemen garis horizontal untuk memberikan pemisah antara judul dan paragraf berikutnya.

15. &lt;p&gt;Snack sales platform for college students&lt;/p&gt; : Ini adalah paragraf yang menjelaskan tujuan dari halaman, yaitu "Snack sales platform for college students".

16. &lt;label for="Email"&gt;Email&lt;/label&gt; : Ini adalah label untuk input email, yang dikaitkan dengan input email menggunakan atribut for.

17. &lt;input type="text" placeholder="example@gmail.com" name="email"&gt; : Ini adalah input teks untuk email dengan placeholder default "example@gmail.com" dan nama "email".

18. &lt;label for="Password"&gt;Password&lt;/label&gt; : Ini adalah label untuk input password, yang dikaitkan dengan input password menggunakan atribut for.

19. &lt;input type="password" placeholder="Password" name="password"&gt; : Ini adalah input password dengan placeholder default "Password" dan nama "password".

20. &lt;button&gt;Login&lt;/button&gt; : Ini adalah tombol dengan teks "Login" yang digunakan untuk mengirimkan formulir.

21. &lt;p&gt;&lt;a href="reset password.html" class="small-link"&gt;Forgot Password?&lt;/a&gt;&lt;/p&gt; : Ini adalah paragraf dengan tautan "Forgot Password?" yang mengarahkan ke halaman "reset password.html". Tautan tersebut memiliki kelas "small-link".

22. &lt;div class="right"&gt; : Ini adalah div dengan kelas "right" yang digunakan untuk mengelompokkan elemen gambar di sebelah kanan halaman.

23. &lt;img src="assets/image login.png" alt=""&gt; : Ini adalah elemen gambar yang menampilkan gambar "image login.png" dari direktori "assets" dengan atribut alternatif kosong (alt).

**PENJELASAN HTML REGISTER PAGE :**
1. &lt;!DOCTYPE html&lt;: Ini adalah deklarasi dokumen yang memberi tahu browser bahwa dokumen ini adalah dokumen HTML.

2.  &lt;html&lt;: Tag pembuka untuk elemen HTML. Semua konten HTML harus berada di dalam tag ini.

3.  &lt;head&lt;: Bagian kepala dokumen HTML yang mengandung informasi tentang dokumen, seperti judul, karakter set, dan tautan ke file eksternal.

4.  &lt;meta charset="utf-8" /&lt;: Mendefinisikan karakter set dokumen sebagai UTF-8, yang merupakan karakter set umum yang digunakan untuk dokumen web.

5.  &lt;title&lt;Registration Page</title>: Ini adalah judul halaman yang akan ditampilkan di tab browser.

6.  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"/&lt;: Mendefinisikan pengaturan tampilan untuk tampilan responsif di perangkat seluler dengan lebar yang sesuai dan skala awal 1.

7.  &lt;link rel="stylesheet" href="register.css" /&lt;: Ini adalah tautan ke file CSS eksternal bernama "register.css" yang akan digunakan untuk menggaya halaman HTML.

8.  &lt;/head&lt;: Menutup bagian kepala dokumen HTML.

9.  &lt;body&lt;: Bagian tubuh dokumen HTML yang akan berisi konten yang akan ditampilkan di halaman web.

10.  &lt;div class="container"&lt;: Ini adalah sebuah div dengan kelas CSS "container" yang digunakan untuk mengelompokkan elemen-elemen dalam tata letak halaman.

11.  &lt;h1 class="form-title"&lt;Registration&lt;/h1&lt;: Ini adalah elemen judul utama (heading) dengan kelas CSS "form-title" yang berisi teks "Registration".

12.  &lt;form action="index.html"&lt;: Ini adalah elemen formulir dengan atribut action yang menentukan ke mana data formulir akan dikirim setelah di-submit (dalam hal ini, ke "index.html").

13.  &lt;div class="main-user-info"&lt;: Ini adalah div yang mengelompokkan elemen-elemen yang berisi informasi utama pengguna.

14.  &lt;div class="user-input-box"&lt;: Ini adalah div dengan kelas CSS "user-input-box" yang mengelompokkan setiap kolom input.

15.  &lt;label for="fullName"&lt;Full Name&lt;/label&lt;: Ini adalah label yang terkait dengan kolom input untuk "Full Name". Label ini membantu dalam mengidentifikasi input.

16.  &lt;input type="text" id="fullName" name="fullName" placeholder="Enter Full Name"/&lt;: Ini adalah elemen input teks untuk "Full Name" dengan atribut id, name, dan placeholder yang menggambarkan input.

17.  &lt;div class="gender-details-box"&lt;: Ini adalah div yang mengelompokkan elemen-elemen yang berkaitan dengan informasi gender pengguna.

18.  &lt;span class="gender-title"&lt;Gender&lt;/span&lt;: Ini adalah elemen teks yang menggambarkan "Gender".

19.  &lt;div class="gender-category"&lt;: Ini adalah div yang mengelompokkan elemen-elemen yang berhubungan dengan pilihan gender.

20.  &lt;div class="form-submit-btn"&lt;: Ini adalah div yang mengelompokkan tombol "Register".

21.  &lt;input type="submit" value="Register"&lt;: Ini adalah tombol "Register" yang akan mengirimkan data formulir ketika diklik.

22.  &lt;/form&lt;: Menutup elemen formulir.

23.  &lt;/div&lt;: Menutup div dengan kelas CSS "container".

24.  &lt;/body&lt;: Menutup elemen tubuh halaman HTML.

25.  &lt;/html&lt;: Menutup elemen HTML.

**PENJELASAN HTML RESET PASSWORD PAGE :**
1. &lt;!DOCTYPE html&lt;: Ini adalah deklarasi dokumen HTML yang memberi tahu browser bahwa dokumen ini adalah dokumen HTML, dan menggunakan bahasa Inggris ("en").

2. &lt;html lang="en"&lt;: Tag pembuka untuk elemen HTML dengan atribut "lang" yang menunjukkan bahasa dokumen (dalam hal ini, bahasa Inggris).

3. &lt;head&lt;: Bagian kepala dokumen HTML yang mengandung informasi tentang dokumen, seperti judul, karakter set, dan tautan ke file eksternal.

4. &lt;meta charset="UTF-8"&lt;: Mendefinisikan karakter set dokumen sebagai UTF-8, yang adalah karakter set umum yang digunakan untuk dokumen web.

5. &lt;title&lt;Reset Password Page&lt;/title&lt;: Ini adalah judul halaman yang akan ditampilkan di tab browser.

6. &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&lt;: Ini adalah meta tag yang memberi petunjuk kepada Internet Explorer (IE) untuk menggunakan mode kompatibilitas terbaru.

7. &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&lt;: Mendefinisikan pengaturan tampilan yang disesuaikan dengan perangkat, dengan lebar tampilan sesuai dengan perangkat dan skala awal 1.0.

8. &lt;link rel="stylesheet" href="reset password.css"&lt;: Ini adalah tautan ke file CSS eksternal dengan nama "reset password.css" yang akan digunakan untuk menggaya halaman HTML.

9. &lt;/head&lt;: Menutup bagian kepala dokumen HTML.

10. &lt;body&lt;: Bagian tubuh dokumen HTML yang akan berisi konten yang akan ditampilkan di halaman web.

11. &lt;div class="wrapper"&lt;: Ini adalah div dengan kelas CSS "wrapper" yang mengelompokkan elemen-elemen dalam tata letak halaman.

12. &lt;div class="container"&lt;: Ini adalah div dengan kelas CSS "container" yang mengelompokkan konten utama halaman.

13. &lt;div class="title-section"&lt;: Ini adalah div yang mengelompokkan elemen-elemen dalam bagian judul.

14. &lt;h2 class="title"&lt;Reset Password&lt;/h2&lt;: Ini adalah elemen judul (heading) dengan kelas CSS "title" yang berisi teks "Reset Password".

15. &lt;p class="para"&lt;...: Ini adalah elemen paragraf dengan kelas CSS "para" yang berisi teks penjelasan tentang proses reset password.

16. &lt;form action="index.html" class="from"&lt;: Ini adalah elemen formulir dengan atribut action yang menentukan ke mana data formulir akan dikirim setelah di-submit (dalam hal ini, ke "index.html"). Formulir ini juga memiliki kelas CSS "from".

17. &lt;div class="input-group"&lt;: Ini adalah div yang mengelompokkan elemen-elemen dalam kelompok input.

18. &lt;label for="" class="label-title"&lt;Enter Your Email&lt;/label&lt;: Ini adalah label dengan kelas CSS "label-title" yang terkait dengan kolom input untuk alamat email. Label ini membantu dalam mengidentifikasi input.

19. &lt;input type="email" name="email" placeholder="Enter your email"&lt;: Ini adalah elemen input email dengan atribut name dan atribut placeholder yang menggambarkan input.

20. &lt;span class="icon"&lt;&#9993;&lt;/span&lt;: Ini adalah elemen teks yang berfungsi sebagai ikon email. Karakter khusus ✉ digunakan untuk menampilkan ikon.

21. &lt;/form&lt;: Menutup elemen formulir.

22. &lt;/div&lt;: Menutup div dengan kelas CSS "container".

23. &lt;/body&lt;: Menutup elemen tubuh halaman HTML.

24. &lt;/html&lt;: Menutup elemen HTML.

**PENJELASAN HTML HOME PAGE :**

**PENJELASAN HTML ABOUT US PAGE :**

**PENJELASAN PRODUCT DAN CART PAGE :**

**PENJELASAN CONTACT PAGE**

**PENJELASAN HTML LEARN MORE PAGE :**
