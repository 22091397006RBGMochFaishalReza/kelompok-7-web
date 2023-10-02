Software Requirements Specification

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
Name
Date
Reason For Changes
Version
-






-






-










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

Tabel 1 Karakteristik Pengguna
Kategori Pengguna
Tugas
Hak Akses ke aplikasi
Kemampuan yang harus dimiliki
User/
Mahasiswa(Penjual Produk)
Menjual produk, menambahkan nama dan gambar produk, Menetapkan harga produk
Melakukan registrasi, Melakukan login, Memantau produk terjual
Mengisi data registrasi sesuai data mahasiswa tersebut
User/
Mahasiswa (Pembeli Produk)
Membeli produk, Menambahkan ke ke keranjang
Melakukan registrasi, Melakukan login, Memantau produk yg dibeli
Mengisi data registrasi sesuai data mahasiswa tersebut, Melakukan pembayaran produk yang dibeli


Admin
Membuat website, Maintenance dan upgrade sistem
Memberikan akses masuk untuk user, Menyimpan data register,data login,dan riwayat login,
Menyediakan kebutuhan fungsional sistem, Menyediakan fasilitas menu pilihan jual/beli, Mengatur data register dan login, Mengecek data register dan login










2.4 Lingkungan Operasi 

Website ini beroperasi pada lingkungan umum untuk kalangan mahasiswa. Website beroperasi khususnya di wilayah kampus Universitas Negeri Surabaya. Website ini dapat diakses oleh mahasiswa Universitas Negeri Surabaya. 

2.5 Batasan Desain dan Implementasi 

<Jelaskan setiap item atau masalah yang akan membatasi pilihan yang tersedia untuk para pengembang / developer. Ini mungkin termasuk: kebijakan perusahaan atau peraturan; keterbatasan hardware (persyaratan memori); teknologi tertentu, alat, dan database yang akan digunakan; persyaratan bahasa; protokol komunikasi; pertimbangan keamanan; atau standar pemrograman>

2.6 Dokumentasi Pengguna

<Daftar komponen dokumentasi pengguna (seperti user manual, on-line help, dan tutorial) yang akan disampaikan bersama dengan perangkat lunak yang akan dikirim>


3. Kebutuhan Antarmuka Eksternal

3.1 User Interfaces 

<Describe the logical characteristics of each interface between the software product and the users. This may include sample screen images, any GUI standards or product family style guides that are to be followed, screen layout constraints, standard buttons and functions (e.g., help) that will appear on every screen, keyboard shortcuts, error message display standards, and so on. Define the software components for which a user interface is needed. Details of the user interface design should be documented in a separate user interface specification.>

3.2 Hardware Interface

<Describe the logical and physical characteristics of each interface between the software product and the hardware components of the system. This may include the supported device types, the nature of the data and control interactions between the software and the hardware, and communication protocols to be used.>

3.3 Software Interface

<Describe the connections between this product and other specific software components (name and version), including databases, operating systems, tools, libraries, and integrated commercial components. Identify the data items or messages coming into the system and going out and describe the purpose of each. Describe the services needed and the nature of communications. Refer to documents that describe detailed application programming interface protocols. Identify data that will be shared across software components. If the data sharing mechanism must be implemented in a specific way (for example, use of a global data area in a multitasking operating system), specify this as an implementation constraint.>

3.4 Communication Interface

<Describe the requirements associated with any communications functions required by this product, including e-mail, web browser, network server communications protocols, electronic forms, and so on. Define any pertinent message formatting. Identify any communication standards that will be used, such as FTP or HTTP. Specify any communication security or encryption issues, data transfer rates, and synchronization mechanisms.>

Functional Requirement

<Area ini menggambarkan pengorganisasian persyaratan fungsional untuk produk dengan fitur sistem, layanan utama yang disediakan oleh produk>

<Tulis Kebutuhan Fungsional / Functional Requirement disini>
Diawali dengan membuat daftar kebutuhan fungsional P/L, lengkap dengan ID dan penjelasan jika perlu. Bisa dibuat dalam bentuk tabel.

ID
Kebutuhan Fungsional
Penjelasan










































































Use Case Diagram

Nama Use Case 
Deskripsi Use Case 
	Dalam use case diagram diatas dijelaskan : 
User : dapat melakukan login, register untuk registrasi, menjual produk untuk penjual, dan membeli produk untuk pembeli.
Admin : dapat mengatur data login user, menyimpan data login user, menyimpan data produk dijual dan terjual, maintenance dan upgrade sistem. 





Flowchart
4.3.1	Flowchart User

Deskripsi Flowchart User

Untuk penjelasan pada flowchart yang akan dilakukan oleh user adalah pertama tama pastinya terdapat start untuk masuk kedalam website penjualan kita. Setelah itu akan ada pertanyaan sudah memiliki akun atau belum, jika sudah bisa melanjutkan ke menu login untuk memasukkan data yang digunakan pada saat mendaftar/register, jika belum memiliki akun user diharapkan memilih menu register yang akan menuntun user mengisikan data data yang diperlukan untuk registrasi. Setelah proses register sudah selesai, user akan kembali ke menu login untuk memasukkan data yang sudah diregistrasikan di awal. Setelah itu berhasil akan menuju atau masuk ke halaman beranda, di dalam halaman beranda terdapat menu pilihan yaitu jual/beli. Jika ingin menjual produk maka kita akan pilih jual lalu mengisikan nama produk, foto produk, harga produk dll. Jika kita memilih untuk membeli produk dari seseorang maka silahkan pilih menu beli, nantinya akan masuk kedalam menu beli untuk membeli produk yang tersedia di dalam toko-toko yang ada, lalu jika sudah menemukan barang yang pas untuk dibeli dapat ditambahkan ke keranjang lalu akan memproses pembayaran, selesai.





















4.3.2	Flowchart Admin
 


Deskripsi Flowchart Admin

Flowchart untuk admin, dimulai dari start lalu kita sebagai admin akan membuat website yang berkaitan tentang hal yang akan kita buat. Setelah itu kita selain membuat website juga menyediakan kebutuhan fungsional sistem, kemudian menyediakan fasilitas bagi user penjual/pembeli. Lalu kita menyimpan data register user, setelah itu mengatur data user. Kemudian kita memisahkan data register dan login. Jika belum register kita memberikan fitur membuat dan memasukkan data register lalu menyimpan data register, mengecek data register user, dan memberikan akses masuk ke website. Jika sudah bisa mengecek data register danmemberikan akses masuk ke website, setelah itu memberikan fitur pilihan jual/beli. Setelah itu semua sudah selesai admin akan menyimpan data produk dijual dan terjual, lalu menyimpan riwayat login user. Jika sistem dalam perbaikan akan maintenance dan upgrade sistem, end.


Non Functional Requirements
<Uraikan dengan ringkas kebutuhan non fungsional dalam tabel sebagai berikut. Isilah Kolom Kebutuhan dengan kalimat yang jelas dan kelak dapat ditest untuk dipenuhi. ID adalah nomor kebutuhan yang harus ditelusuri pada saat test. Tuliskan N/A bila Not Applicable>

ID
Parameter
Kebutuhan


Availability




Reliability




Ergonomy




Portability




Memory




Response time




Safety
N/A


Security










Others 1: Bahasa komunikasi
Misalnya : semua tanya jawab harus dalam bahasa Indonesia




Setiap layar harus mengandung logo PT Pos Indonesia








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
