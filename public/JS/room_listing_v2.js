let record = [{
        location: "Toronto",
        price: 120,
        description: "Luxurious Condo near CN Tower with FREE PARKING",
        pic: "IMG/Toronto_ON.jpg"
    },
    {
        location: "Hamilton",
        price: 50,
        description: "Private Apartment in a Family Home+Pool & Hottub!",
        pic: "IMG/Hamilton_ON.jpg"
    },
    {
        location: "Kitchener",
        price: 70,
        description: "Romantic, Lakeside Home with Views of Lake Como",
        pic: "IMG/Kitchener_ON.jpg"
    },
    {
        location: "London",
        price: 60,
        description: "Private Family Love Villa close to 66Beach",
        pic: "IMG/London_ON.jpg"
    },
];


class grid {
    constructor(rows, colunms) {
        this.rows = rows;
        this.colunms = colunms;
    }
    create() {
        let body = document.querySelector('body');
        let new_div = document.createElement("DIV");

        new_div.style.display = 'grid';
        new_div.style.textAlign = 'center';
        new_div.style.width = "88%";
        new_div.style.gridGap = "15px";
        new_div.style.padding = "3% 6%";

        // ----------------------------------------CREATE ARRAY.....
        let new_h3 = new Array(this.rows); //headers
        let new_p = new Array(this.rows); //prices
        let new_d = new Array(this.rows); //descriptions
        let new_pic = new Array(this.rows); //Pics
        let new_div2 = new Array(this.rows); //Inner div

        for (let i = 1; i <= this.colunms; i++) {
            new_h3[i] = [];
            new_p[i] = [];
            new_d[i] = [];
            new_pic[i] = [];
            new_div2[i] = [];
        }
        // ----------------------------------------CREATE ELEMENTS.....
        for (let i = 1; i <= this.colunms; i++) {
            for (let j = 1; j <= this.rows; j++) {
                new_h3[i][j] = document.createElement("h3");
                new_p[i][j] = document.createElement('p');
                new_d[i][j] = document.createElement('p');
                new_pic[i][j] = document.createElement('img');
                new_div2[i][j] = document.createElement('div');
            }
        }
        // ----------------------------------------INITIALIZE ELEMENTS.....
        for (let i = 1; i <= this.colunms; i++) {
            for (let j = 1; j <= this.rows; j++) {
                let rnd = Math.floor(Math.random() * 4);

                new_h3[i][j].style.gridColumn = j;
                new_p[i][j].style.gridColumn = j;
                new_d[i][j].style.gridColumn = j;
                new_pic[i][j].style.gridColumn = j;
                new_div2[i][j].style.gridColumn = j;
                new_pic[i][j].style.width = "80%";
                new_pic[i][j].style.height = "auto";

                new_pic[i][j].src = record[rnd].pic;
                new_h3[i][j].innerHTML = record[rnd].location;
                new_p[i][j].innerHTML = `$${record[rnd].price} CAD / night`;
                new_d[i][j].innerHTML = record[rnd].description;
            }
        }
        // ----------------------------------------DISPLAY ELEMENTS.....
        for (let i = 1; i <= this.colunms; i++) {
            for (let j = 1; j <= this.rows; j++) {
                new_div.appendChild(new_div2[i][j]);
                new_div2[i][j].appendChild(new_pic[i][j]);
                new_div2[i][j].appendChild(new_h3[i][j]);
                new_div2[i][j].appendChild(new_p[i][j]);
                new_div2[i][j].appendChild(new_d[i][j]);
            }
        }
        body.appendChild(new_div);
    }
}

let grid1 = new grid(3, 3);
grid1.create();