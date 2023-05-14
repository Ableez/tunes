const files  = {
        "20221214_140916.jpg": {
            "name": "20221214_140916.jpg",
            "size": 668128,
            "encoding": "7bit",
            "tempFilePath": "",
            "truncated": false,
            "mimetype": "image/jpeg",
            "md5": "9c38d6f8ce80e50a04c2b43766cd7db5"
        },
        "ableez.com email.txt": {
            "name": "ableez.com email.txt",
            "size": 485,
            "encoding": "7bit",
            "tempFilePath": "",
            "truncated": false,
            "mimetype": "text/plain",
            "md5": "8d7932fca363be71510f4ef761a42c00"
}}

const filePlay = (files) => {
     Object.keys(files).forEach((key) => {
        const filenames = files[key].name;
       console.log(filenames)
      });
      return files
}

console.log(filePlay(files))