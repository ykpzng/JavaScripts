// bir değişkene assign edilmiş DB den bir sorgu gelmesi bekleniyorken bu uzun sürebilir. Bu gelecek sorguyu bir sonraki işlemde döngüye tabi tuttuğumuzu varsayalım. Aşağıdaki döngü normalde sorgunun gecikmesini beklemez ve döngüde hata oluşur. Bunu engellemek için değişken "await" olarak tanımlanır ki bu işlem bitmeden bir sonraki işleme geçmesini engeller.


// "await", "async" function ile çalışır. Süre aşımı olabilecek hertürlü veri türünü "await" olarak tanımlamalıyız.

async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(data);
  data.forEach(i => {
    console.log(i);
  });
}

fetchPosts();