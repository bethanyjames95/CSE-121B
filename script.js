let catList = [];

const output = (cats) => {
    cats.forEach(
        cat => {
            let article = document.createElement("article");

            let catName = document.createElement("h2");
            catName.innerHTML = cat.catName;
            
            let catPersonality = document.createElement("h3");
            catPersonality.innerHTML = cat.catPersonality;

            let catAge = document.createElement("h4");
            catAge.innerHTML = cat.catAge;

            let img = document.createElement("img");
            img.setAttribute("src", cat.imageURL);
            img.setAttribute("alt", cat.catName);

            article.appendChild(catName);
            article.appendChild(catPersonality);
            article.appendChild(catAge);
            article.appendChild(img);

            document.getElementById("cats").appendChild(article);
    });
}

fetch("https://run.mocky.io/v3/47ff1037-fa25-4ede-b2c3-39610cc2220d")
    .then(response => response.json())
    .then(cats => {
        catList = cats;
        output(catList);
    });

    const reset = () => {
        document.getElementById("cats").innerHTML = "";
    }

    const sortBy = () => {
        reset();
    
        let filter = document.querySelector('#sortBy').value;
    
        switch (filter) {
            case 'catNameAscending':
                output(catList.sort(
                    (cat1, cat2) => {
                        let catName1 = cat1.catName.toLowerCase();
                        let catName2 = cat2.catName.toLowerCase();
                        if (catName1 < catName2) return -1;
                        else if (catName1 > catName2) return 1;
                        else return 0;
                    }));
                break;
            case 'catNameDescending':
                output(catList.sort(
                    (cat1, cat2) => {
                        let catName1 = cat1.catName.toLowerCase();
                        let catName2 = cat2.catName.toLowerCase();
                        if (catName1 > catName2) return -1;
                        else if (catName1 < catName2) return 1;
                        else return 0;
                    }));
                break;
            case 'catAgeDescending':
                output(catList.sort(
                    (cat1, cat2) => {
                        let catAge1 = cat1.catAge;
                        let catAge2 = cat2.catAge;
                        if (catAge1 > catAge2) return -1;
                        else if (catAge1 < catAge2) return 1;
                        else return 0;
                    }));
                break;
                case 'catAgeAscending':
                    output(catList.sort(
                        (cat1, cat2) => {
                            let catAge1 = cat1.catAge;
                            let catAge2 = cat2.catAge;
                            if (catAge1 < catAge2) return -1;
                            else if (catAge1 > catAge2) return 1;
                            else return 0;
                        }));
                    break;
        }
    }

    document.querySelector('#sortBy').addEventListener('change', sortBy);
    
