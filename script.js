// Mengambil data tabel dari Local Storage saat halaman dimuat
window.addEventListener("DOMContentLoaded", function() {
    var tableData = JSON.parse(localStorage.getItem("pegawaiData"));
    if (tableData) {
      for (var i = 0; i < tableData.length; i++) {
        addDataToTable(tableData[i]);
      }
    }
  });
  
  document.getElementById("formTambahData").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah form dikirim secara default
  
    var no = document.getElementById("inputNo").value;
    var foto = document.getElementById("inputFoto").value;
    var nama = document.getElementById("inputNama").value;
    var jenisKelamin = document.getElementById("inputJenisKelamin").value;
    var tanggalLahir = document.getElementById("inputTanggalLahir").value;
    var jabatan = document.getElementById("inputJabatan").value;
    var keterangan = document.getElementById("inputKeterangan").value;
  
    var data = {
      no: no,
      foto: foto,
      nama: nama,
      jenisKelamin: jenisKelamin,
      tanggalLahir: tanggalLahir,
      jabatan: jabatan,
      keterangan: keterangan
    };
  
    addDataToTable(data);
    saveDataToLocalStorage(data);
    document.getElementById("formTambahData").reset();
  });
  
  function addDataToTable(data) {
    var table = document.getElementById("myTable");
    var row = table.insertRow();
  
    var cellNo = row.insertCell();
    cellNo.innerHTML = data.no;
  
    var cellFoto = row.insertCell();
    cellFoto.innerHTML = data.foto;
  
    var cellNama = row.insertCell();
    cellNama.innerHTML = data.nama;
  
    var cellJenisKelamin = row.insertCell();
    cellJenisKelamin.innerHTML = data.jenisKelamin;
  
    var cellTanggalLahir = row.insertCell();
    cellTanggalLahir.innerHTML = data.tanggalLahir;
  
    var cellJabatan = row.insertCell();
    cellJabatan.innerHTML = data.jabatan;
  
    var cellKeterangan = row.insertCell();
    cellKeterangan.innerHTML = data.keterangan;
  
    var cellAksi = row.insertCell();
    cellAksi.innerHTML = "<button onclick='editData(this)'>Edit</button> <button onclick='hapusData(this)'>Hapus</button>";
  }
  
  function saveDataToLocalStorage(data) {
    var tableData = JSON.parse(localStorage.getItem("pegawaiData")) || [];
    tableData.push(data);
    localStorage.setItem("pegawaiData", JSON.stringify(tableData));
  }
  
  function editData(button) {
    var row = button.parentNode.parentNode;
    var cells = row.getElementsByTagName("td");
  
    var no = cells[0].innerHTML;
    var foto = cells[1].innerHTML;
    var nama = cells[2].innerHTML;
    var jenisKelamin = cells[3].innerHTML;
    var tanggalLahir = cells[4].innerHTML;
    var jabatan = cells[5].innerHTML;
    var keterangan = cells[6].innerHTML;
  
    document.getElementById("inputNo").value = no;
    document.getElementById("inputFoto").value = foto;
    document.getElementById("inputNama").value = nama;
    document.getElementById("inputJenisKelamin").value = jenisKelamin;
    document.getElementById("inputTanggalLahir").value = tanggalLahir;
    document.getElementById("inputJabatan").value = jabatan;
    document.getElementById("inputKeterangan").value = keterangan;
  
    // Menghapus data dari Local Storage
    var tableData = JSON.parse(localStorage.getItem("pegawaiData"));
    if (tableData) {
      for (var i = 0; i < tableData.length; i++) {
        if (tableData[i].no === no) {
          tableData.splice(i, 1);
          break;
        }
      }
      localStorage.setItem("pegawaiData", JSON.stringify(tableData));
    }
  
    // Menghapus baris dari tabel
    row.parentNode.removeChild(row);
  }
  
  function hapusData(button) {
    var row = button.parentNode.parentNode;
    var no = row.getElementsByTagName("td")[0].innerHTML;
  
    // Menghapus data dari Local Storage
    var tableData = JSON.parse(localStorage.getItem("pegawaiData"));
    if (tableData) {
      for (var i = 0; i < tableData.length; i++) {
        if (tableData[i].no === no) {
          tableData.splice(i, 1);
          break;
        }
      }
      localStorage.setItem("pegawaiData", JSON.stringify(tableData));
    }
  
    // Menghapus baris dari tabel
    row.parentNode.removeChild(row);
  }
  