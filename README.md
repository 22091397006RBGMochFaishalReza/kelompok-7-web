												__Software Requirements Specification__

												Snack Sales Platform for College Students

														Version 1.0 approved

															Prepared by : 

												22091397006 - R.BG.Moch Faishal Reza

												22091397032 - Farrel Yosan Navyansyah

												22091397035 - Roy Nurfaza




															02/10/2023
	       
Table of Contents
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

Revision History

|  Name  |  Date  |  Reason For Changes  |  Version  |
|--------|--------|----------------------|-----------|
|        |        |                      |           |
|        |        |                      |           |



1. Pendahuluan

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


2. Deskripsi Keseluruhan

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

2.5 Batasan Desain dan Implementasi 

<Jelaskan setiap item atau masalah yang akan membatasi pilihan yang tersedia untuk para pengembang / developer. Ini mungkin termasuk: kebijakan perusahaan atau peraturan; keterbatasan hardware (persyaratan memori); teknologi tertentu, alat, dan database yang akan digunakan; persyaratan bahasa; protokol komunikasi; pertimbangan keamanan; atau standar pemrograman>

2.6 Dokumentasi Pengguna

<Daftar komponen dokumentasi pengguna (seperti user manual, on-line help, dan tutorial) yang akan disampaikan bersama dengan perangkat lunak yang akan dikirim>


3. Kebutuhan Antarmuka Eksternal

3.1 User Interfaces 

User Interface dari website ini pada awalnya ada sebuah landing page aplikasi kami yang menampilan sebuah background makanan ringan lalu ada logo dari website kami juga, dan ada juga menu login dan register yang pada saat kita pencet tolmbolnya akanmenuju ke menu login awal ataupun register awal.

3.2 Hardware Interface

Pembuatan website tidak dikhususkan bagi siapapun karena website ini akan mudah dijangkau oleh siapapun yang menggunakan hardware low to high. Untuk menjangkau website ini tidak dibutuhkan spesifikasi yg tinggi dikarenakan pada umumnya pengguna atau user di kalangan kampus sudah memiliki perangkat dengan hardware yang lebih dari cukup untuk menjangkau atau membuka website ini.

3.3 Software Interface

Antarmuka perangkat lunak dari situs web penjualan camilan yang diimplementasikan dalam kode HTML dan CSS di atas adalah sebuah halaman web dengan header yang mencakup logo perusahaan, tombol "Login" dan "Register" di landing page, serta latar belakang yang menarik. Konten utama halaman terdiri dari pesan selamat dengan deskripsi yang menjelaskan layanan atau produk yang ditawarkan, semuanya ditampilkan secara rapi dan responsif. Antarmuka ini berfungsi sebagai tampilan depan situs web dan memungkinkan pengguna untuk mengakses layanan penjualan camilan dengan mudah melalui tombol-tombol Login dan Register di landing page.

3.4 Communication Interface

Antarmuka komunikasi dari situs web penjualan camilan (snack) yang diimplementasikan dalam kode HTML dan CSS di atas adalah berdasarkan protokol HTTP melalui peramban web pengguna. Ketika pengguna mengakses halaman web, permintaan HTTP dikirimkan ke server web untuk mengambil dan menampilkan konten halaman. Halaman web ini juga dapat menyediakan formulir elektronik yang memungkinkan pengguna mengirimkan pesan atau data melalui metode HTTP POST. Dalam konteks ini, antarmuka komunikasi terutama berfokus pada interaksi antara peramban web pengguna dan server web untuk menampilkan dan mengirimkan informasi terkait penjualan camilan. Keamanan komunikasi melalui protokol HTTPS dapat diterapkan untuk melindungi data sensitif dan transmisi aman.


4. Functional Requirement

<Area ini menggambarkan pengorganisasian persyaratan fungsional untuk produk dengan fitur sistem, layanan utama yang disediakan oleh produk>

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


5. Non Functional Requirements

<Uraikan dengan ringkas kebutuhan non fungsional dalam tabel sebagai berikut. Isilah Kolom Kebutuhan dengan kalimat yang jelas dan kelak dapat ditest untuk dipenuhi. ID adalah nomor kebutuhan yang harus ditelusuri pada saat test. Tuliskan N/A bila Not Applicable>

|      ID      |          Parameter          |              Kebutuhan              |
|--------------|-----------------------------|-------------------------------------|
|              |Availability                 |                                     |
|              |Reliability                  |                                     |
|              |Ergonomy                     |                                     |
|              |Portability                  |                                     |
|              |Memory                       |                                     |
|              |Response time                |                                     |
|              |Safety                       |N/A                                  |
|              |Security                     |                                     |
|              |                             |                                     |
|              |Others 1: Bahasa komunikasi  |Misalnya : semua tanya jawab harus dalam bahasa Indonesia|
|              |                             |Setiap layar harus mengandung logo PT Pos Indonesia|
|              |                             |                                     |

Catatan :
Availability : ketersediaan aplikasi, misalnya harus terus menerus beroperasi 7 hari perminggu, 24 jam per haritanpa gagal
Reliability : keandalan, misalnya tidak pernah boleh gagal(atau kegagalan yang ditolerir adalah …%)  sehingga harus dipikirkan fault tolerant architecture. Biasanya hanya perlu untuk Critical Application yang jika gagal akan berakibat fatal.
Ergonomy : kenyamanan pakai bagi pengguna
Portability : kemudahan untuk dibawa dan dioperasikan ke mesin/sistem operasi/platform yang lain
Memory : jika perhitungan kapasitas memori internal kritis (misalnya untuk SW yang harus dijadikan CHIPS dan ukurannya harus kecil
Response time : Batasan waktu yang harus dipenuhi. Sangat penting untuk aplikasi Real Time. Contoh: “Aaplikasi harus mampu menampilkan hasil dalam 4 detik”, atau “ATM harus menarik kembali kartu yang tidak diambil dalam waktu 3 menit”
Safety: yang menyangkut keselamatan manusia, misalnya untuk SW yang dipakai pada sistem kontrol di pabrik
Security : aspek keamanan yang harus dipenuhi


# Kelompok-7-Web

PENJELASAN HTML LOGIN PAGE 

Note : Dalam README di GitHub tanda kurang dari/&lt; dan lebih dari/&gt; pada awal serta akhir tag HTML, Markdown akan menganggapnya sebagai kode HTML atau tag HTML, dan itu tidak akan ditampilkan secara harfiah pada halaman GitHub. Sebagai contoh, jika menulis &lt;p&gt; di dalam README, Markdown akan menganggapnya sebagai tag paragraf HTML dan tidak akan menampilkannya sebagai teks &lt;p&gt; yang sebenarnya.

Untuk menampilkan tanda &lt; dan &gt; secara harfiah dalam README di GitHub, maka perlu menggantikannya dengan menggunakan karakter khusus HTML atau entity HTML. Maka:

&lt; dapat digantikan dengan menuliskan & lalu l lalu t dan terakhir;

&gt; dapat digantikan dengan menuliskan & lalu g lalu t dan terakhir;

Tulis dengan urut dan benar. 

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
