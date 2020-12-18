<!DOCTYPE html>
<html lang="id-ID">
<head>
<meta name="viewport" content="initial-scale=1, width=device-width">
<meta charset="UTF-8">
<meta name="description" content="UMKM Kelurahan Semaki adalah Situs yang dikembangkan untuk memajukan UMKM di Kelurahan Semaki">
<meta name="keyword" content="Kelurahan Semaki, UMKM Semaki, Usaha mikro kecil menengah, kampung semaki, kampung sanggrahan">
<meta name="author" content="Vin. Syahputra">

<link rel="stylesheet" type="text/css" href="style/dist/main.css">
<link rel="icon" type="image/png" href="img/logo.png">

<title>UMKM SEMAKI</title>

</head>
<body>
    <div class="wrap">
        <div class="alert">
            <p>Pendaftaran Berhasil</p>
            <button id="close-alert" style="margin: 0; margin-top:20px;" name="tutup">TUTUP</button>
        </div>
        <div class="hero">
            <strong>UMKM</strong>
            <h2>KELURAHAN <i>SEMAKI</i></h2>
            <p>adalah program yang dikembangkan untuk memajukan UMKM di kelurahan semaki</p>
            <button id="cta">LIHAT</button>
        </div>
        <form action="" method="POST" enctype="multipart/form-data">
            <div class="daftar">
                <p>DAFTAR</p>
            </div>

            <div class="container">
                <div class="wrap-nama wrap-input">
                    <label for="">NAMA</label>
                    <p class="keterangan"></p>
                    <input type="text" class="inputs" placeholder="masukkan nama anda" required minlength="3" id="nama" name="nama" autocomplete="off" autofocus>
                </div>

                <div class="wrap-telp wrap-input">
                    <label for="">NO TELP</label>
                    <p class="keterangan"></p>
                    <div class="wrap-input-telp">
                        <input type="hidden" value="+62" name="kode">
                        <span>+62</span>
                        <input type="tel" class="inputs" required minlength="9" id="telp" autocomplete="off" name="telp">
                    </div>
                </div>

                <div class="wrap-alamat wrap-input">
                    <label for="">ALAMAT</label>
                    <p class="keterangan"></p>
                    <textarea name="alamat" id="alamat" class="inputs" placeholder="alamat tempat tinggal penjual"></textarea>
                </div>

                <div class="wrap-deskripsi wrap-input">
                    <label for="">DESKRIPSI</label>
                    <p class="keterangan"></p>
                    <textarea name="deskripsi" class="inputs" id="deskripsi" placeholder="contoh: menyediakan nasi kuning, nasi uduk, es teh" autocomplete="off"></textarea>
                </div>

                <button id="btnLanjut">LANJUT</button>
                
            </div>
            <div class="container">
                <h2>FOTO PENJUAL</h2>
                <p class="keterangan"></p>
                <label for="foto_penjual" id="labelFoto" class="labelUpload">UPLOAD</label>
                <input type="file" id="foto_penjual" required accept=".png, .jpeg, .jpg" name="foto_penjual">
                <h2>FOTO PRODUK</h2>
                <p class="keterangan"></p>
                <label for="foto_produk" id="labelProduk" class="labelUpload">UPLOAD</label>
                <input type="file" id="foto_produk" multiple required accept=".png, .jpeg, .jpg" name="foto_produk[]">
                <div class="tombol">
                    <button style="background: #ededed; color: #333; margin-right: 5px;" id="btKembali">KEMBALI</button><button id="kirim" name="kirim">KIRIM</button>
                </div>
            </div>
        </form>
    </div>
<script src="./script/app.js"></script>
</body>
</html>

<?php
error_reporting(0);
require 'form.php';

if(isset($_POST["kirim"])){

        if(tambah($_POST) > 0){
        
            echo"<script>document.location.href = 'index.php?status=sukses';</script>";

        }else{
            
            echo"<script>document.location.href = 'index.php?status=gagal';</script>";
        }


}


if(isset($_GET['status'])){
    if($_GET['status']=='sukses'){
        echo"
            <script>
            document.querySelector('.alert').style.display = 'flex';
            document.querySelector('.alert > p').textContent = 'Pendaftaran Berhasil, Data Sedang Diproses';
            
            </script>
        ";
    }else{
        echo"
                <script>
                document.querySelector('.alert').style.display = 'flex';
                document.querySelector('.alert > p').textContent = 'Pendaftaran Gagal, Nomor Sudah Digunakan';
                
                </script>
            ";
    }
}

?>