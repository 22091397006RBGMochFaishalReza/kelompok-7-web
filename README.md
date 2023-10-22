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

Tabel Karakteristik Pengguna : 

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

Persyaratan fungsional adalah pernyataan tentang bagaimana suatu sistem harus berperilaku. Ini mendefinisikan apa yang harus dilakukan sistem untuk memenuhi kebutuhan atau harapan pengguna. Persyaratan fungsional dapat dianggap sebagai fitur yang dideteksi pengguna. berbeda dari persyaratan non-fungsional, yang menentukan bagaimana sistem harus bekerja secara internal (misalnya, kinerja, keamanan, dll.).

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

<h2>PENJELASAN HTML</h2>

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
1. &lt;!DOCTYPE html&gt;: Ini adalah deklarasi dokumen yang memberi tahu browser bahwa dokumen ini adalah dokumen HTML.

2.  &lt;html&gt;: Tag pembuka untuk elemen HTML. Semua konten HTML harus berada di dalam tag ini.

3.  &lt;head&gt;: Bagian kepala dokumen HTML yang mengandung informasi tentang dokumen, seperti judul, karakter set, dan tautan ke file eksternal.

4.  &lt;meta charset="utf-8" /&gt;: Mendefinisikan karakter set dokumen sebagai UTF-8, yang merupakan karakter set umum yang digunakan untuk dokumen web.

5.  &lt;title&gt;Registration Page&lt;/title&gt;: Ini adalah judul halaman yang akan ditampilkan di tab browser.

6.  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"/&gt;: Mendefinisikan pengaturan tampilan untuk tampilan responsif di perangkat seluler dengan lebar yang sesuai dan skala awal 1.

7.  &lt;link rel="stylesheet" href="register.css" /&gt;: Ini adalah tautan ke file CSS eksternal bernama "register.css" yang akan digunakan untuk menggaya halaman HTML.

8.  &lt;/head&gt;: Menutup bagian kepala dokumen HTML.

9.  &lt;body&gt;: Bagian tubuh dokumen HTML yang akan berisi konten yang akan ditampilkan di halaman web.

10.  &lt;div class="container"&gt;: Ini adalah sebuah div dengan kelas CSS "container" yang digunakan untuk mengelompokkan elemen-elemen dalam tata letak halaman.

11.  &lt;h1 class="form-title"&gt;Registration&lt;/h1&gt;: Ini adalah elemen judul utama (heading) dengan kelas CSS "form-title" yang berisi teks "Registration".

12.  &lt;form action="index.html"&gt;: Ini adalah elemen formulir dengan atribut action yang menentukan ke mana data formulir akan dikirim setelah di-submit (dalam hal ini, ke "index.html").

13.  &lt;div class="main-user-info"&gt;: Ini adalah div yang mengelompokkan elemen-elemen yang berisi informasi utama pengguna.

14.  &lt;div class="user-input-box"&gt;: Ini adalah div dengan kelas CSS "user-input-box" yang mengelompokkan setiap kolom input.

15.  &lt;label for="fullName"&gt;Full Name&lt;/label&gt;: Ini adalah label yang terkait dengan kolom input untuk "Full Name". Label ini membantu dalam mengidentifikasi input.

16.  &lt;input type="text" id="fullName" name="fullName" placeholder="Enter Full Name"/&gt;: Ini adalah elemen input teks untuk "Full Name" dengan atribut id, name, dan placeholder yang menggambarkan input.

17.  &lt;div class="gender-details-box"&gt;: Ini adalah div yang mengelompokkan elemen-elemen yang berkaitan dengan informasi gender pengguna.

18.  &lt;span class="gender-title"&gt;Gender&lt;/span&gt;: Ini adalah elemen teks yang menggambarkan "Gender".

19.  &lt;div class="gender-category"&gt;: Ini adalah div yang mengelompokkan elemen-elemen yang berhubungan dengan pilihan gender.

20.  &lt;div class="form-submit-btn"&gt;: Ini adalah div yang mengelompokkan tombol "Register".

21.  &lt;input type="submit" value="Register"&gt;: Ini adalah tombol "Register" yang akan mengirimkan data formulir ketika diklik.

22.  &lt;/form&gt;: Menutup elemen formulir.

23.  &lt;/div&gt;: Menutup div dengan kelas CSS "container".

24.  &lt;/body&gt;: Menutup elemen tubuh halaman HTML.

25.  &lt;/html&gt;: Menutup elemen HTML.

**PENJELASAN HTML RESET PASSWORD PAGE :**
1. &lt;!DOCTYPE html&gt;: Ini adalah deklarasi dokumen HTML yang memberi tahu browser bahwa dokumen ini adalah dokumen HTML, dan menggunakan bahasa Inggris ("en").

2. &lt;html lang="en"&gt;: Tag pembuka untuk elemen HTML dengan atribut "lang" yang menunjukkan bahasa dokumen (dalam hal ini, bahasa Inggris).

3. &lt;head&gt;: Bagian kepala dokumen HTML yang mengandung informasi tentang dokumen, seperti judul, karakter set, dan tautan ke file eksternal.

4. &lt;meta charset="UTF-8"&gt;: Mendefinisikan karakter set dokumen sebagai UTF-8, yang adalah karakter set umum yang digunakan untuk dokumen web.

5. &lt;title&gt;Reset Password Page&lt;/title&gt;: Ini adalah judul halaman yang akan ditampilkan di tab browser.

6. &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;: Ini adalah meta tag yang memberi petunjuk kepada Internet Explorer (IE) untuk menggunakan mode kompatibilitas terbaru.

7. &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;: Mendefinisikan pengaturan tampilan yang disesuaikan dengan perangkat, dengan lebar tampilan sesuai dengan perangkat dan skala awal 1.0.

8. &lt;link rel="stylesheet" href="reset password.css"&gt;: Ini adalah tautan ke file CSS eksternal dengan nama "reset password.css" yang akan digunakan untuk menggaya halaman HTML.

9. &lt;/head&gt;: Menutup bagian kepala dokumen HTML.

10. &lt;body&gt;: Bagian tubuh dokumen HTML yang akan berisi konten yang akan ditampilkan di halaman web.

11. &lt;div class="wrapper"&gt;: Ini adalah div dengan kelas CSS "wrapper" yang mengelompokkan elemen-elemen dalam tata letak halaman.

12. &lt;div class="container"&gt;: Ini adalah div dengan kelas CSS "container" yang mengelompokkan konten utama halaman.

13. &lt;div class="title-section"&gt;: Ini adalah div yang mengelompokkan elemen-elemen dalam bagian judul.

14. &lt;h2 class="title"&gt;Reset Password&lt;/h2&gt;: Ini adalah elemen judul (heading) dengan kelas CSS "title" yang berisi teks "Reset Password".

15. &lt;p class="para"&gt;...: Ini adalah elemen paragraf dengan kelas CSS "para" yang berisi teks penjelasan tentang proses reset password.

16. &lt;form action="index.html" class="from"&gt;: Ini adalah elemen formulir dengan atribut action yang menentukan ke mana data formulir akan dikirim setelah di-submit (dalam hal ini, ke "index.html"). Formulir ini juga memiliki kelas CSS "from".

17. &lt;div class="input-group"&gt;: Ini adalah div yang mengelompokkan elemen-elemen dalam kelompok input.

18. &lt;label for="" class="label-title"&gt;Enter Your Email&lt;/label&gt;: Ini adalah label dengan kelas CSS "label-title" yang terkait dengan kolom input untuk alamat email. Label ini membantu dalam mengidentifikasi input.

19. &lt;input type="email" name="email" placeholder="Enter your email"&gt;: Ini adalah elemen input email dengan atribut name dan atribut placeholder yang menggambarkan input.

20. &lt;span class="icon"&gt;&#9993;&lt;/span&gt;: Ini adalah elemen teks yang berfungsi sebagai ikon email. Karakter khusus ✉ digunakan untuk menampilkan ikon.

21. &lt;/form&gt;: Menutup elemen formulir.

22. &lt;/div&gt;: Menutup div dengan kelas CSS "container".

23. &lt;/body&gt;: Menutup elemen tubuh halaman HTML.

24. &lt;/html&gt;: Menutup elemen HTML.

**PENJELASAN HTML HOME PAGE :**

1. &lt;!DOCTYPE html&gt; : Ini adalah deklarasi tipe dokumen HTML yang menunjukkan bahwa dokumen HTML ini menggunakan versi HTML terbaru.

2. &lt;html lang="en"&gt; : Ini adalah elemen root (paling atas) dari halaman web yang menandakan dimulainya dokumen HTML. Atribut lang="en" menunjukkan bahwa bahasa dokumen adalah bahasa Inggris.

3. &lt;head&gt; : Ini adalah elemen kepala dokumen HTML yang berisi informasi tentang halaman seperti meta tag, judul, dan tautan ke berkas eksternal.

4. &lt;meta charset="UTF-8"&gt; : Ini mengatur karakter encoding dokumen HTML ke UTF-8, yang umumnya digunakan untuk mendukung karakter internasional.

5. &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt; : Ini adalah meta tag yang digunakan untuk mengatur kompatibilitas dengan Internet Explorer (IE) dengan mode terbaru.

6. &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt; : Ini adalah meta tag yang digunakan untuk mengatur tampilan responsif pada perangkat berbasis web, seperti ponsel. Itu memungkinkan halaman untuk menyesuaikan lebar dengan lebar perangkat dan mengatur tingkat pembesaran awal (skala awal).

7. &lt;title&gt;Home Page&lt;/title&gt; : Ini adalah judul halaman yang akan ditampilkan di bilah judul browser.

8. &lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"&gt; : Ini adalah tautan ke berkas CSS dari Font Awesome yang digunakan untuk ikon dalam halaman Anda.

9. &lt;link rel="stylesheet" href="home.css"&gt; : Ini adalah tautan ke berkas CSS lokal (dalam hal ini "home.css") yang akan mengatur tampilan dan gaya halaman.

10. &lt;header&gt; : Ini adalah elemen header yang umumnya digunakan untuk menampilkan bagian atas halaman web yang berisi elemen-elemen seperti logo, navigasi, dan lainnya.

11. &lt;a href="#" class="logo"&gt; : Ini adalah tautan logo perusahaan dengan atribut href="#", yang dalam hal ini mengarahkan ke halaman yang sama (dalam halaman beranda). Gambar logo perusahaan ditampilkan dengan elemen &lt;img&gt;

12. &lt;nav class="navbar"&gt; : Ini adalah elemen navigasi yang berisi tautan-tautan menu navigasi. Anda memiliki tautan ke berbagai bagian halaman dan beberapa halaman eksternal.

13. &lt;div class="icons"&gt; : Ini adalah div dengan kelas "icons" yang berisi ikon keranjang belanja (shopping cart) yang mengarahkan ke halaman "cart.html".

14. &lt;section class="home" id="home"&gt; : Ini adalah bagian dari halaman web yang diberi kelas "home" dan ID "home", yang berisi konten beranda atau beranda utama.

15. &lt;div class="content"&gt; : Ini adalah div dengan kelas "content" yang berisi teks dan tautan untuk mengundang pengunjung untuk berbelanja.

16. &lt;h3&gt;Welcome To Our Store &lt;/h3&gt;, &lt;span&gt;eat something&lt;/span&gt;, &lt;p&gt;Silahkan Memilih Jajanan Kesukaan Kamuuu&lt;/p&gt;, dan &lt;a href="#" class="btn"&gt;shop now&lt;/a&gt; : Ini adalah elemen-elemen teks dan tautan yang digunakan untuk menyambut pengunjung dan mengundang mereka untuk berbelanja.

17. &lt;section class="about" id="about"&gt; : Ini adalah bagian dari halaman web yang diberi kelas "about" dan ID "about", yang berisi informasi tentang perusahaan atau situs web.

18. &lt;h1 class="heading"&gt; &lt;span&gt; about &lt;/span&gt; us &lt;/h1&gt; : Ini adalah judul yang berisi teks "about us".

19. &lt;div class="row"&gt; : Ini adalah div dengan kelas "row" yang digunakan untuk mengelompokkan elemen-elemen dalam sejumlah kolom.

20. &lt;div class="video-container"&gt; : Ini adalah div dengan kelas "video-container" yang berisi elemen video yang memainkan video tentang perusahaan atau situs web.

21. &lt;video src="assets/about.mp4" loop autoplay muted&gt;&lt;/video&gt; : Ini adalah elemen video yang menampilkan video dari berkas "about.mp4" dengan pengaturan looping (loop), otomatis mulai (autoplay), dan suara dimatikan (muted).

22. &lt;div class="content"&gt; : Ini adalah div dengan kelas "content" yang berisi teks dan tautan yang menjelaskan mengapa pengunjung harus memilih perusahaan atau situs web ini.

23. &lt;h3&gt;why chose us?&lt;/h3&gt; : Ini adalah subjudul yang menjelaskan alasan memilih perusahaan atau situs web.

24. &lt;p&gt;karena kami adalah website penyedia ...&lt;/p&gt; : Ini adalah paragraf yang menjelaskan alasan-alasan untuk memilih situs web.

25. &lt;a href="learn more.html" class="btn"&gt;learn more&lt;/a&gt; : Ini adalah tautan "Learn More" yang mengarahkan pengunjung ke halaman eksternal "learn more.html".

26. &lt;section class="product" id="product"&gt; : Ini adalah bagian dari halaman web yang berisi daftar produk yang ditawarkan.

27. &lt;h1 class="heading"&gt; &lt;span&gt;Our&lt;/span&gt; Products &lt;/h1&gt; : Ini adalah judul yang berisi teks "Our Products".

28. &lt;div class="card"&gt; dan elemen-elemen berikutnya: Ini adalah kartu produk yang berisi gambar, nama produk, harga, dan tautan "Add To Cart".

29. &lt;section class="review" id="review"&gt; : Ini adalah bagian yang berisi ulasan pelanggan.

30. &lt;h1 class="heading"&gt; &lt;span&gt;Review&lt;/span&gt; Customer &lt;/h1&gt; Ini adalah judul yang berisi teks "Review Customer".

31. &lt;div class="col"&gt; dan elemen-elemen berikutnya: Ini adalah kolom yang berisi ulasan pelanggan, dengan gambar pelanggan, nama, bintang ulasan, dan teks ulasan.

32. &lt;section class="contact" id="contact"&gt; : Ini adalah bagian yang berisi formulir kontak untuk menghubungi admin atau perusahaan.

33. &lt;h1 class="heading"&gt; &lt;span&gt;Contact&lt;/span&gt; Us &lt;/h1&gt; : Ini adalah judul yang berisi teks "Contact Us".

34. &lt;div class="container"&gt;, &lt;div class="contact-box"&gt;, dan elemen-elemen berikutnya: Ini adalah div yang berisi formulir kontak dengan kolom nama, email, telepon, pesan, dan tombol "Send To Admin".

35. &lt;footer class="footer"&gt; : Ini adalah elemen footer yang berisi tautan-tautan dan informasi kontak.

36. &lt;div class="container-footer"&gt;, &lt;div class="row-footer"&gt;, dan elemen-elemen berikutnya: Ini adalah div yang berisi tautan-tautan menu, informasi kontak, dan tautan media sosial.

**PENJELASAN HTML ABOUT US PAGE :**

1. &lt;!DOCTYPE html&gt; : Ini adalah deklarasi tipe dokumen HTML yang menunjukkan bahwa dokumen HTML ini menggunakan versi HTML terbaru.

2. &lt;html lang="en"&gt; : Ini adalah elemen root (paling atas) dari halaman web yang menandakan dimulainya dokumen HTML. Atribut lang="en" menunjukkan bahwa bahasa dokumen adalah bahasa Inggris.

3. &lt;head&gt; : Ini adalah elemen kepala dokumen HTML yang berisi informasi tentang halaman seperti meta tag, judul, dan tautan ke berkas eksternal.

4. &lt;meta charset="UTF-8"&gt; : Ini mengatur karakter encoding dokumen HTML ke UTF-8, yang umumnya digunakan untuk mendukung karakter internasional.

5. &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt; : Ini adalah meta tag yang digunakan untuk mengatur kompatibilitas dengan Internet Explorer (IE) dengan mode terbaru.

6. &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt; : Ini adalah meta tag yang digunakan untuk mengatur tampilan responsif pada perangkat berbasis web, seperti ponsel. Itu memungkinkan halaman untuk menyesuaikan lebar dengan lebar perangkat dan mengatur tingkat pembesaran awal (skala awal).

7. &lt;title&gt;About Page&lt;/title&gt; : Ini adalah judul halaman yang akan ditampilkan di bilah judul browser.

8. &lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"&gt; : Ini adalah tautan ke berkas CSS dari Font Awesome yang digunakan untuk ikon dalam halaman Anda.

9. &lt;link rel="stylesheet" href="about.css"&gt; : Ini adalah tautan ke berkas CSS lokal (dalam hal ini "about.css") yang akan mengatur tampilan dan gaya halaman.

10. &lt;header&gt; : Ini adalah elemen header yang umumnya digunakan untuk menampilkan bagian atas halaman web yang berisi elemen-elemen seperti logo, navigasi, dan lainnya.

11. &lt;a href="#" class="logo"&gt; : Ini adalah tautan logo perusahaan dengan atribut href="#", yang dalam hal ini mengarahkan ke halaman yang sama (dalam halaman beranda). Gambar logo perusahaan ditampilkan dengan elemen &lt;img&gt;

12. &lt;nav class="navbar"&gt; : Ini adalah elemen navigasi yang berisi tautan-tautan menu navigasi. Anda memiliki tautan ke beranda ("home.html"), halaman "about" (yang merupakan halaman saat ini), "product," "review," dan "contact.

13. &lt;div class="icons"&gt; : Ini adalah div dengan kelas "icons" yang berisi ikon keranjang belanja (shopping cart) yang tidak memiliki tautan yang ditentukan (href="#").

14. &lt;section class="about" id="about"&gt; : Ini adalah bagian dari halaman web yang diberi kelas "about" dan ID "about", yang berisi konten beranda atau beranda utama.

15. &lt;h1 class="heading"&gt; &lt;span&gt; about &lt;/span&gt; us &lt;/h1&gt; : Ini adalah judul yang berisi teks "about us."

16. &lt;div class="row"&gt; : Ini adalah div dengan kelas "row" yang digunakan untuk mengelompokkan elemen-elemen dalam sejumlah kolom.

17. &lt;div class="video-container"&gt; : Ini adalah div dengan kelas "video-container" yang berisi elemen video yang memainkan video dari berkas "about.mp4" dengan pengaturan looping, otomatis mulai, dan suara dimatikan.

18. &lt;div class="content"&gt; : Ini adalah div dengan kelas "content" yang berisi teks dan tautan yang menjelaskan mengapa pengunjung harus memilih perusahaan atau situs web ini.

19. &lt;h3&gt;why chose us?&lt;/h3&gt; : Ini adalah subjudul yang menjelaskan alasan memilih perusahaan atau situs web.

20. &lt;p&gt;kenapa memilih kami ...&lt;/p&gt; : Ini adalah paragraf yang menjelaskan alasan-alasan untuk memilih situs web.

21. &lt;a href="learn more.html" class="btn"&gt;learn more&lt;/a&gt; : Ini adalah tautan "Learn More" yang mengarahkan pengunjung ke halaman eksternal "learn more.html."

**PENJELASAN PRODUCT DAN CART PAGE :**

**PENJELASAN REVIEW PAGE :**

1. &lt;!DOCTYPE html&gt; : Ini adalah deklarasi tipe dokumen HTML yang menunjukkan bahwa dokumen HTML ini menggunakan versi HTML terbaru.

2. &lt;html lang="en"&gt; : Ini adalah elemen root (paling atas) dari halaman web yang menandakan dimulainya dokumen HTML. Atribut lang="en" menunjukkan bahwa bahasa dokumen adalah bahasa Inggris.

3. &lt;head&gt; : Ini adalah elemen kepala dokumen HTML yang berisi informasi tentang halaman seperti meta tag, judul, dan tautan ke berkas eksternal.

4. &lt;meta charset="UTF-8"&gt; : Ini mengatur karakter encoding dokumen HTML ke UTF-8, yang umumnya digunakan untuk mendukung karakter internasional.

5. &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt; : Ini adalah meta tag yang digunakan untuk mengatur kompatibilitas dengan Internet Explorer (IE) dengan mode terbaru.

6. &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt; : Ini adalah meta tag yang digunakan untuk mengatur tampilan responsif pada perangkat berbasis web, seperti ponsel. Itu memungkinkan halaman untuk menyesuaikan lebar dengan lebar perangkat dan mengatur tingkat pembesaran awal (skala awal).

7. &lt;title&gt;Review Page&lt;/title&gt; : Ini adalah judul halaman yang akan ditampilkan di bilah judul browser.

8. &lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"&gt; : Ini adalah tautan ke berkas CSS dari Font Awesome yang digunakan untuk ikon dalam halaman Anda.

9. &lt;link rel="stylesheet" href="review.css"&gt; : Ini adalah tautan ke berkas CSS lokal (dalam hal ini "review.css") yang akan mengatur tampilan dan gaya halaman.

10. &lt;header&gt; : Ini adalah elemen header yang umumnya digunakan untuk menampilkan bagian atas halaman web yang berisi elemen-elemen seperti logo, navigasi, dan lainnya.

11. &lt;a href="#" class="logo"&gt; : Ini adalah tautan logo perusahaan dengan atribut href="#", yang dalam hal ini mengarahkan ke halaman yang sama (dalam halaman beranda). Gambar logo perusahaan ditampilkan dengan elemen &lt;img&gt;

12. &lt;nav class="navbar"&gt; : Ini adalah elemen navigasi yang berisi tautan-tautan menu navigasi. Anda memiliki tautan ke beranda ("home.html"), halaman "about" (yang merupakan halaman saat ini), "product," "review," dan "contact.

13. &lt;div class="icons"&gt; : Ini adalah div dengan kelas "icons" yang berisi ikon keranjang belanja (shopping cart) yang tidak memiliki tautan yang ditentukan (href="#").

14. &lt;section class="review" id="review"&gt; :  Ini adalah bagian dari halaman web yang diberi kelas "review" dan ID "review," yang berisi ulasan dari pelanggan.

15. &lt;h1 class="heading"&gt; &lt;span&gt;Review&lt;/span&gt; Customer &lt;/h1&gt; : Ini adalah judul yang berisi teks "Review Customer."

16. &lt;div class="col"&gt; : Ini adalah div dengan kelas "col" yang digunakan untuk mengelompokkan setiap ulasan dari pelanggan. Dalam dokumen Anda, Anda memiliki tiga ulasan pelanggan yang masing-masing dikelompokkan dalam div ini.

**PENJELASAN CONTACT PAGE :**

1. &lt;!DOCTYPE html&gt; : Ini adalah deklarasi tipe dokumen HTML yang menunjukkan bahwa dokumen HTML ini menggunakan versi HTML terbaru.

2. &lt;html lang="en"&gt; : Ini adalah elemen root (paling atas) dari halaman web yang menandakan dimulainya dokumen HTML. Atribut lang="en" menunjukkan bahwa bahasa dokumen adalah bahasa Inggris.

3. &lt;head&gt; : Ini adalah elemen kepala dokumen HTML yang berisi informasi tentang halaman seperti meta tag, judul, dan tautan ke berkas eksternal.

4. &lt;meta charset="UTF-8"&gt; : Ini mengatur karakter encoding dokumen HTML ke UTF-8, yang umumnya digunakan untuk mendukung karakter internasional.

5. &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt; : Ini adalah meta tag yang digunakan untuk mengatur kompatibilitas dengan Internet Explorer (IE) dengan mode terbaru.

6. &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt; : Ini adalah meta tag yang digunakan untuk mengatur tampilan responsif pada perangkat berbasis web, seperti ponsel. Itu memungkinkan halaman untuk menyesuaikan lebar dengan lebar perangkat dan mengatur tingkat pembesaran awal (skala awal).

7. &lt;title&gt;Contact Page&lt;/title&gt; : Ini adalah judul halaman yang akan ditampilkan di bilah judul browser.

8. &lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"&gt; : Ini adalah tautan ke berkas CSS dari Font Awesome yang digunakan untuk ikon dalam halaman Anda.

9. &lt;link rel="stylesheet" href="review.css"&gt; : Ini adalah tautan ke berkas CSS lokal (dalam hal ini "review.css") yang akan mengatur tampilan dan gaya halaman.

10. &lt;header&gt; : Ini adalah elemen header yang umumnya digunakan untuk menampilkan bagian atas halaman web yang berisi elemen-elemen seperti logo, navigasi, dan lainnya.

11. &lt;a href="#" class="logo"&gt; : Ini adalah tautan logo perusahaan dengan atribut href="#", yang dalam hal ini mengarahkan ke halaman yang sama (dalam halaman beranda). Gambar logo perusahaan ditampilkan dengan elemen &lt;img&gt;

12. &lt;nav class="navbar"&gt; : Ini adalah elemen navigasi yang berisi tautan-tautan menu navigasi. Anda memiliki tautan ke beranda ("home.html"), halaman "about" (yang merupakan halaman saat ini), "product," "review," dan "contact.

13. &lt;div class="icons"&gt; : Ini adalah div dengan kelas "icons" yang berisi ikon keranjang belanja (shopping cart) yang tidak memiliki tautan yang ditentukan (href="#").

14. &lt;section class="contact" id="contact"&gt; : Ini adalah bagian dari halaman web yang diberi kelas "contact" dan ID "contact," yang berisi formulir kontak.

15. &lt;h1 class="heading"&gt; &lt;span&gt;Contact&lt;/span&gt; Us &lt;/h1&gt; : Ini adalah judul yang berisi teks "Contact Us."

16. &lt;div class="container"&gt; : Ini adalah div yang digunakan untuk mengelompokkan elemen-elemen dalam bentuk kontak. Dalam hal ini, Anda memiliki dua div lagi, yaitu "contact-box" yang dibagi menjadi "left" dan "right."

17. &lt;div class="left"&gt; : Ini adalah div bagian kiri dari "contact-box," yang dalam kode yang Anda berikan tidak berisi konten apa pun. Anda mungkin akan menambahkan gambar atau elemen lainnya di sini.

18. &lt;div class="right"&gt; : Ini adalah div bagian kanan dari "contact-box," yang berisi elemen-elemen formulir kontak seperti input teks, textarea, dan tombol "Send To Admin."

19. &lt;h2&gt;Contact Admin&lt;/h2&gt; : Ini adalah subjudul yang menyatakan "Contact Admin" dan mungkin digunakan untuk menunjukkan bahwa ini adalah formulir kontak untuk menghubungi admin.

20. &lt;input type="text" class="field" placeholder="Your Name"&gt; : Ini adalah elemen input teks untuk nama pengirim pesan. Atribut placeholder memberikan petunjuk tentang apa yang harus dimasukkan ke dalam input ini.

21. &lt;input type="text" class="field" placeholder="Your Email"&gt; : Ini adalah elemen input teks untuk alamat email pengirim pesan.

22. &lt;input type="text" class="field" placeholder="Phone"&gt; : Ini adalah elemen input teks untuk nomor telepon pengirim pesan.

23. &lt;textarea placeholder="Message" class="field"&gt;&lt;/textarea&gt; : Ini adalah elemen textarea yang memungkinkan pengirim pesan untuk menulis pesan atau pertanyaan.

24. &lt;button class="btn"&gt;Send To Admin&lt;/button&gt; : Ini adalah tombol "Send To Admin" yang, ketika ditekan, akan mengirimkan pesan atau data yang dimasukkan dalam formulir ini kepada admin.

**PENJELASAN HTML LEARN MORE PAGE :**

1. &lt;!DOCTYPE html&gt;': Ini adalah deklarasi dokumen HTML yang memberi tahu browser bahwa halaman ini adalah dokumen HTML.

2. &lt;html lang="en"&gt;: Ini adalah elemen awal yang menandakan awal dari dokumen HTML. lang="en" menandakan bahwa bahasa yang digunakan dalam halaman ini adalah bahasa Inggris.

3. &lt;head&gt;: Ini adalah bagian kepala dokumen HTML. Biasanya, di sini Anda akan menaruh informasi-informasi yang berkaitan dengan halaman web, seperti meta tag, judul halaman, dan tautan ke berkas-berkas eksternal.

4. &lt;meta charset="UTF-8"&gt;: Ini adalah meta tag yang mengindikasikan bahwa karakter encoding yang digunakan adalah UTF-8, yang merupakan encoding umum untuk dokumen web.

5. &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;: Ini adalah meta tag yang digunakan untuk mengatur mode kompatibilitas Internet Explorer.

6. &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;: Ini adalah meta tag yang digunakan untuk mengatur tampilan halaman web di perangkat seluler. Dengan mengatur viewport, Anda memastikan bahwa halaman web akan responsif.

7. &lt;title&gt;Learn More&lt;/title&gt;: Ini adalah judul dari halaman web yang akan ditampilkan di tab browser.

8. &lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"&gt;: Ini adalah tautan ke berkas CSS eksternal dari Font Awesome, yang digunakan untuk ikon-ikon.

9. &lt;link rel="stylesheet" href="learn more.css"&gt;: Ini adalah tautan ke berkas CSS lokal yang digunakan untuk mengatur tampilan halaman web.

10. &lt;body&gt;: Ini adalah elemen tubuh dokumen HTML, di mana konten utama halaman web akan ditempatkan.

11. &lt;div class="containers"&gt;: Ini adalah div dengan kelas "containers" yang digunakan untuk mengelompokkan konten halaman web.

12. &lt;h1 class="heading"&gt;&lt;span&gt;Our&lt;/span&gt; Team&lt;/h1&gt;: Ini adalah elemen judul h1 dengan kelas "heading", yang mungkin digunakan untuk menampilkan judul halaman. Teks "Our" dikelilingi oleh elemen &lt;span&gt;, yang memungkinkan untuk pengaturan gaya khusus dalam CSS.

13. &lt;div class="profiles"&gt;: Ini adalah div dengan kelas "profiles" yang digunakan untuk mengelompokkan profil tim.


<h2>PENJELASAN CSS</h2>

**PENJELASAN STYLE CSS :**

1. (*) { ... }: Ini adalah selektor universal (*) yang digunakan untuk mengatur nilai-nilai dasar (reset) untuk semua elemen HTML di halaman web. Dalam kasus ini:
margin: 0;: Menghapus margin bawaan pada elemen HTML.
padding: 0;: Menghapus padding bawaan pada elemen HTML.
box-sizing: border-box;: Mengatur model kotak (box model) menjadi "border-box", yang membuat lebar dan tinggi elemen termasuk border dan padding, sehingga menghindari masalah perhitungan ukuran.

2. body { ... }: Ini adalah aturan CSS untuk elemen <body> dalam halaman HTML:

font-family: Arial, sans-serif;: Mengatur jenis font untuk teks dalam elemen body.
background-image: url('assets/background.jpg');: Menetapkan gambar latar belakang untuk halaman dengan gambar 'background.jpg' dari direktori 'assets'.
background-size: cover;: Mengatur gambar latar belakang agar mencakup seluruh area elemen <body>.
background-repeat: no-repeat;: Mencegah gambar latar belakang diulang.
background-position: center;: Menempatkan gambar latar belakang di tengah elemen <body>.
overflow: hidden;: Menghilangkan overflow, sehingga tidak akan ada gulir vertikal atau horizontal.
color: #0f0b0a;: Menentukan warna teks dalam elemen <body>.
position: relative;: Mengatur posisi elemen <body> sebagai relatif.
height: 100vh;: Mengatur tinggi elemen <body> menjadi tinggi viewport (100% dari tinggi jendela browser).

3. header { ... }: Ini adalah aturan CSS untuk elemen dengan kelas "header":

position: absolute;: Mengatur posisi elemen header menjadi absolut, sehingga akan tetap di atas halaman.
top: 0; left: 0; right: 0;: Membuat elemen header terisi seluruh lebar halaman.
height: 80px;: Mengatur tinggi elemen header menjadi 80 piksel.
background-color: transparent;: Mengatur latar belakang elemen header menjadi transparan.
box-shadow: none;: Menghapus bayangan (shadow) elemen header.

4. .logo { ... }: Ini adalah aturan CSS untuk elemen dengan kelas "logo":

position: absolute;: Mengatur posisi elemen logo menjadi absolut.
left: 20px; top: 20px;: Mengatur posisi logo pada sudut kiri atas header dengan jarak 20 piksel dari atas dan kiri.
font-size: 24px; font-weight: bold;: Mengatur ukuran dan bobot teks untuk elemen logo.

5. .content { ... }: Ini adalah aturan CSS untuk elemen dengan kelas "content":

padding: 20px;: Memberikan padding 20 piksel di sekitar elemen "content".
display: flex;: Menggunakan model tampilan flexbox.
justify-content: flex-end;: Mengatur konten dalam elemen "content" agar mengisi sisi kanan secara seimbang.
align-items: center;: Mengatur elemen dalam "content" agar berada di tengah secara vertikal.
height: 100%;: Mengatur tinggi elemen "content" menjadi 100% dari tinggi elemen "body".

6. .left { ... }: Ini adalah aturan CSS untuk elemen dengan kelas "left":

text-align: right;: Mengatur teks dalam elemen "left" agar terletak di sebelah kanan.
max-width: 50%;: Mengatur lebar maksimum elemen "left" agar tidak melebihi 50% dari lebar elemen "content".

7. .left h1 { ... }: Ini adalah aturan CSS untuk elemen <h1> yang berada dalam elemen "left":

font-size: 3em;: Mengatur ukuran teks judul menjadi 3 kali ukuran font dasar.
margin-bottom: 20px;: Menambahkan jarak 20 piksel di bawah elemen <h1>.

8. .left p { ... }: Ini adalah aturan CSS untuk elemen <p> yang berada dalam elemen "left":

font-size: 1.5em;: Mengatur ukuran teks paragraf menjadi 1.5 kali ukuran font dasar.
margin-bottom: 20px;: Menambahkan jarak 20 piksel di bawah elemen <p>.

9. .login-register { ... }: Ini adalah aturan CSS untuk elemen dengan kelas "login-register":

position: absolute;: Mengatur posisi elemen "login-register" menjadi absolut.
top: 20px; right: 20px;: Mengatur elemen "login-register" pada sudut kanan atas header dengan jarak 20 piksel dari atas dan kanan.

10. .login-register a { ... }: Ini adalah aturan CSS untuk tautan yang berada dalam elemen "login-register":

text-decoration: none;: Menghapus dekorasi tautan seperti garis bawah.
color: #fff;: Mengatur warna teks tautan menjadi putih.
background-color: #333;: Mengatur latar belakang tautan menjadi warna abu-abu gelap.
padding: 10px 20px;: Memberikan ruang bantal (padding) pada tautan.
border-radius: 5px;: Mengatur sudut elemen tautan menjadi sedikit melengkung (bulat).
margin-right: 10px;: Menambahkan jarak sebesar 10 piksel di sebelah kanan tautan.
font-weight: bold;: Mengatur bobot teks tautan menjadi tebal.

11. .login-register a:hover { ... }: Ini adalah aturan CSS untuk tautan saat diklik (hover state):
background-color: cadetblue;: Mengubah warna latar belakang tautan menjadi "cadetblue" saat kursor berada di atasnya.
transition: background-color 0.3s ease;: Mengatur transisi untuk perubahan warna latar belakang agar halus selama 0.3 detik dengan efek "ease".

**PENJELASAN LOGIN CSS :**

1. (*) (Universal Selector):

Ini adalah pemilihan universal yang berlaku untuk semua elemen HTML pada halaman. Pada kode ini, beberapa properti gaya akan diterapkan ke semua elemen.
body:
Ini mengatur properti-properti gaya untuk elemen <body> halaman web.
display: flex;: Ini membuat konten di dalam elemen body menggunakan display jenis flex, yang akan membantu dalam mengatur elemen di dalamnya.
justify-content: center; dan align-items: center;: Ini akan mengatur konten di dalam elemen body ke tengah secara horizontal dan vertikal.
min-height: 100vh;: Ini mengatur tinggi minimum elemen body agar sama dengan tinggi viewport (layar pengguna), sehingga background akan selalu menutupi seluruh tampilan.
background: cadetblue;: Ini mengatur warna latar belakang body.

2. .container:

Ini adalah kelas yang diberikan kepada suatu elemen dalam dokumen HTML. Kode ini mengatur tampilan elemen dengan kelas .container.
width: 100%;: Elemen dengan kelas .container akan memiliki lebar 100% dari lebar parent-nya.
display: flex;: Konten di dalam elemen dengan kelas .container akan menggunakan display jenis flex.
max-width: 850px;: Elemen .container tidak akan melebihi lebar maksimum 850px.
background: #fff;: Latar belakang elemen akan berwarna putih.
border-radius: 15px;: Elemen akan memiliki sudut bulat dengan radius 15px.
box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);: Menerapkan efek bayangan pada elemen.

3. .login:

Ini adalah kelas yang diberikan kepada elemen dengan kelas .login. Elemen ini memiliki lebar 400px.
form:

Elemen ini adalah formulir pada halaman web.
width: 250px;: Formulir memiliki lebar 250px.
margin: 60px auto;: Menerapkan margin 60px di atas dan bawah serta otomatis menengah secara horizontal.

4. h1:

Mengatur properti gaya untuk elemen judul h1.
margin: 20px;: Memberikan margin di sekitar judul.
text-align: center;: Mengatur teks dalam judul ke tengah.
font-weight: bolder;: Mengatur ketebalan huruf tebal.
text-transform: uppercase;: Mengubah semua huruf dalam judul menjadi huruf besar.
color: rgb(205, 186, 15);: Mengatur warna teks judul.

5. hr:

Ini adalah elemen garis horizontal (hr) yang digunakan untuk memisahkan elemen dalam formulir.
border-top: 2px solid #cbdadc;: Mengatur garis horizontal dengan lebar 2px dan warna #cbdadc.

6. p:

Mengatur properti gaya untuk elemen teks paragraf (p).
text-align: center;: Mengatur teks paragraf ke tengah.
margin: 10px;: Memberikan margin di sekitar teks paragraf.
color: #0f0b0a;: Mengatur warna teks.

7. .right img:

Ini adalah gambar yang berada dalam elemen dengan kelas .right.
width: 450px;: Mengatur lebar gambar menjadi 450px.
height: 100%;: Gambar akan memiliki tinggi yang mengisi elemen yang mengandungnya.
border-top-right-radius: 15px; dan border-bottom-right-radius: 15px;: Mengatur sudut bulat pada sudut kanan atas dan bawah gambar.

8. form label:

Mengatur properti gaya untuk label dalam formulir.
display: block;: Label akan ditampilkan sebagai blok, sehingga akan berada di bawah elemen yang terkait.
font-size: 16px;: Mengatur ukuran font label.
font-weight: 600;: Mengatur ketebalan huruf.
padding: 5px;: Memberikan padding di sekitar label.

9. input:

Mengatur properti gaya untuk input dalam formulir.
width: 100%;: Input akan mengisi lebar maksimum yang tersedia.
margin: 2px;: Memberikan margin sekitar input.
border: none; dan outline: none;: Menghilangkan border dan outline (garis tepi dan garis pinggir) dari input.
padding: 8px;: Memberikan padding di dalam input.
border-radius: 5px;: Mengatur sudut bulat pada input.
border: 1px solid gray;: Memberikan border 1px solid dengan warna abu-abu pada input.

10. button:

Mengatur properti gaya untuk tombol dalam formulir.
border: none; dan outline: none;: Menghilangkan border dan outline dari tombol.
padding: 8px;: Memberikan padding pada tombol.
width: 252px;: Mengatur lebar tombol.
color: #fff;: Mengatur warna teks pada tombol.
font-size: 16px;: Mengatur ukuran font pada tombol.
cursor: pointer;: Mengubah ikon kursor menjadi tanda tangan saat mengarah ke tombol.
margin-top: 20px;: Memberikan margin di atas tombol.
border-radius: 5px;: Mengatur sudut bulat pada tombol.
background: #333;: Mengatur warna latar belakang tombol.

11. button:hover:

Ini adalah properti khusus untuk tombol saat digerakkan (hover).
background: cadetblue;: Mengubah warna latar belakang tombol menjadi cadetblue saat kursor berada di atasnya.
transition: background-color 0.3s ease;: Mengatur transisi (transition) yang mulus ketika mengubah warna latar belakang tombol, dengan durasi 0.3 detik dan jenis perubahan yang mudah (ease).

12. .small-link:
Ini adalah kelas yang diberikan kepada elemen untuk membuat tautan teks dengan ukuran font yang lebih kecil.
font-size: 12px;: Mengatur ukuran font menjadi 12px.
text-align: left;: Mengatur teks tautan ke kiri.
margin-top: 5px;: Memberikan margin di atas tautan.


**PENJELASAN REGISTER CSS :**

1. (*) (Universal Selector):

Ini adalah pemilihan universal yang berlaku untuk semua elemen HTML pada halaman. Pada kode ini, beberapa properti gaya akan diterapkan ke semua elemen.
padding: 0;: Mengatur padding elemen menjadi 0.
margin: 0;: Mengatur margin elemen menjadi 0.
box-sizing: border-box;: Mengatur model kotak elemen menjadi "border-box," yang berarti bahwa padding dan border akan dimasukkan dalam lebar dan tinggi elemen.
font-family: sans-serif;: Mengatur jenis font yang akan digunakan untuk teks di seluruh halaman sebagai jenis font "sans-serif."

2. body:

Ini mengatur properti-properti gaya untuk elemen <body> halaman web.
display: flex;: Ini membuat konten di dalam elemen body menggunakan display jenis flex, yang akan membantu dalam mengatur elemen di dalamnya.
height: 100vh;: Mengatur tinggi elemen body agar sesuai dengan tinggi viewport (layar pengguna).
justify-content: center; dan align-items: center;: Ini akan mengatur konten di dalam elemen body ke tengah secara horizontal dan vertikal.
background: url('assets/Header Page.jpg');: Mengatur gambar latar belakang elemen body dengan gambar yang disimpan dalam folder 'assets.'
background-size: cover;: Mengatur ukuran gambar latar belakang agar menutupi seluruh elemen body.

3. .container:

Ini adalah kelas yang diberikan kepada suatu elemen dalam dokumen HTML. Kode ini mengatur tampilan elemen dengan kelas .container.
width: 100%;: Elemen dengan kelas .container akan memiliki lebar 100% dari lebar parent-nya.
max-width: 650px;: Elemen .container tidak akan melebihi lebar maksimum 650px.
background: rgba(0, 0, 0, 0.5);: Mengatur latar belakang elemen dengan efek transparansi.
padding: 28px;: Memberikan padding di dalam elemen.
margin: 0 28px;: Memberikan margin di sisi kiri dan kanan elemen.
border-radius: 10px;: Mengatur sudut bulat dengan radius 10px.
box-shadow: inset -2px 2px 2px white;: Menerapkan efek bayangan di dalam elemen dengan bayangan yang berwarna putih.

4. .form-title:

Ini adalah kelas yang diberikan kepada elemen untuk judul formulir.
font-size: 26px;: Mengatur ukuran font judul menjadi 26px.
font-weight: 600;: Mengatur ketebalan huruf judul.
text-align: center;: Mengatur teks dalam judul ke tengah.
padding-bottom: 6px;: Memberikan padding di bagian bawah judul.
color: white;: Mengatur warna teks judul menjadi putih.
text-shadow: 2px 2px 2px black;: Memberikan efek bayangan teks judul.
border-bottom: solid 1px white;: Menambahkan garis bawah pada judul dengan warna putih.

5. .main-user-info:

Ini adalah kelas yang diberikan kepada elemen untuk mengelola informasi pengguna utama.
display: flex;: Mengatur tampilan elemen dengan display jenis flex.
flex-wrap: wrap;: Mengatur elemen agar dapat melintasi baris jika terlalu banyak.
justify-content: space-between;: Mengatur ruang antara elemen di dalam elemen ini.
padding: 20px 0;: Memberikan padding di atas dan bawah elemen.

6. .user-input-box:nth-child(2n):

Ini adalah aturan CSS yang hanya berlaku untuk elemen .user-input-box yang merupakan elemen anak kedua, keempat, keenam, dst.
justify-content: end;: Mengatur elemen agar kontennya berada di ujung kanan.

7. .user-input-box:

Ini adalah kelas yang diberikan kepada elemen untuk mengelola kotak input pengguna.
display: flex;: Mengatur tampilan elemen dengan display jenis flex.
flex-wrap: wrap;: Mengatur elemen agar dapat melintasi baris jika terlalu banyak.
width: 50%;: Mengatur lebar elemen menjadi setengah dari lebar parent-nya.
padding-bottom: 15px;: Memberikan padding di bagian bawah elemen.

8. .user-input-box label:

Ini adalah kelas yang diberikan kepada elemen label di dalam .user-input-box.
width: 95%;: Mengatur lebar label menjadi 95% dari lebar parent-nya.
color: white;: Mengatur warna teks label menjadi putih.
font-size: 20px;: Mengatur ukuran font label menjadi 20px.
font-weight: 400;: Mengatur ketebalan huruf label.

9. .user-input-box input:

Ini adalah kelas yang diberikan kepada elemen input di dalam .user-input-box.
height: 40px;: Mengatur tinggi elemen input menjadi 40px.
width: 95%;: Mengatur lebar elemen input menjadi 95% dari lebar parent-nya.
border-radius: 7px;: Mengatur sudut bulat dengan radius 7px.
outline: none;: Menghilangkan outline (garis pinggir) dari input.
border: 1px solid grey;: Mengatur border dengan lebar 1px dan warna abu-abu pada input.
padding: 0 10px;: Memberikan padding pada input.

10. .gender-title:

Ini adalah kelas yang diberikan kepada elemen untuk judul jenis kelamin.
color: white;: Mengatur warna teks judul menjadi putih.
font-size: 24px;: Mengatur ukuran font judul menjadi 24px.
font-weight: 600;: Mengatur ketebalan huruf.

11. .gender-category:
Ini adalah kelas yang diberikan kepada elemen untuk mengelola kategori jenis kelamin.
margin: 15px 0;: Memberikan margin pada bagian atas dan bawah elemen ini.
color: white;: Mengatur warna teks menjadi putih.

12. .gender-category label:

Ini adalah kelas yang diberikan kepada elemen label di dalam .gender-category.
padding: 0 20px 0 5px;: Memberikan padding pada sisi kiri dan kanan label untuk memberikan ruang ekstra di sekitar teks.

13. .gender-category label, .gender-category input, dan .form-submit-btn input:

Ini adalah beberapa peraturan CSS yang berlaku untuk elemen-elemen input, label, dan tombol dalam formulir.
cursor: pointer;: Mengubah kursor mouse menjadi tanda tangan saat berada di atas elemen-elemen ini.

14. .form-submit-btn:

Ini adalah kelas yang diberikan kepada elemen untuk mengelola tombol submit pada formulir.
margin-top: 40px;: Memberikan margin di atas tombol.

15. .form-submit-btn input:

Ini adalah kelas yang diberikan kepada elemen input dalam tombol submit.
display: block;: Mengatur elemen input agar ditampilkan sebagai blok.
width: 100%;: Mengatur lebar input agar mengisi seluruh lebar tombol.
margin-top: 10px;: Memberikan margin di atas elemen input.
font-size: 20px;: Mengatur ukuran font input menjadi 20px.
padding: 10px;: Memberikan padding di dalam elemen input.
border: none;: Menghilangkan border dari input.
border-radius: 3px;: Mengatur sudut bulat dengan radius 3px.
color: rgb(209, 209, 209);: Mengatur warna teks input.
background: #333;: Mengatur warna latar belakang tombol submit.

16. .form-submit-btn input:hover:

Ini adalah peraturan khusus untuk tombol submit saat digerakkan (hover).
background: cadetblue;: Mengubah warna latar belakang tombol submit menjadi cadetblue saat kursor berada di atasnya.
color: rgb(255, 255, 255);: Mengubah warna teks tombol submit menjadi putih saat kursor berada di atasnya.

17. @media (max-width: 600px):

Ini adalah aturan CSS yang hanya berlaku ketika lebar viewport kurang dari atau sama dengan 600px. Ini digunakan untuk mengatur tampilan responsif pada perangkat berukuran kecil.
.container dalam mode tampilan kecil akan memiliki lebar minimum 280px.
.user-input-box akan memiliki margin lebih besar di mode tampilan kecil.
.user-input-box:nth-child(2n) akan mengatur ruang antara elemen di mode tampilan kecil.
.gender-category akan mengatur elemen dengan display jenis flex dan ruang antara elemen di mode tampilan kecil.
.main-user-info akan memiliki maksimum tinggi dan area overflow yang dapat digulir.
.main-user-info::-webkit-scrollbar akan menghilangkan scrollbar pada elemen .main-user-info untuk browser berbasis WebKit.


**PENJELASAN RESET PASSWORD CSS :**

1. 
