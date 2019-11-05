class grid {
    constructor(rows, colunms) {
        this.rows = rows;
        this.colunms = colunms;
    }
    create(location, price, description) {
        let body = document.querySelector('body');
        let counter = 0;
        let record = {
            location: location,
            price: price,
            description: description
        }

        //2D array...
        let new_h3 = new Array(this.colunms);
        for (let i = 0; i < this.rows; i++) {
            new_h3[i] = [];
        }


        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.colunms; j++) {
                new_h3[i][j] = document.createElement("h3");
            }
            new_h3[1].innerHTML = "hello";
            counter++;
            let new_div = document.createElement("DIV");

            // let fr1_new_h3 = document.createElement("h3");
            // let fr2_new_h3 = document.createElement("h3");
            // let fr3_new_h3 = document.createElement("h3");

            // let fr1_new_p = [document.createElement("h3"), document.createElement("h3"), document.createElement("h3")];

            // new_div.style.display = 'grid';
            // new_div.style.textAlign = 'center';
            // new_div.style.gridTemplateColumns = "100px 1fr 1fr 1fr 100px";

            // fr1_new_h3.style.gridColumn = "2";
            // fr2_new_h3.style.gridColumn = "3";
            // fr3_new_h3.style.gridColumn = "4";

            // fr1_new_p[0].style.gridColumn = '2';

            // fr1_new_h3.innerHTML = record.location;
            // fr2_new_h3.innerHTML = record.location;
            // fr3_new_h3.innerHTML = record.location;

            // fr1_new_p[0].innerHTML = record.price;

            // if (counter > 3)
            //     counter = 0;

            new_div.appendChild(new_h3[1]);
            // new_div.appendChild(fr2_new_h3)
            // new_div.appendChild(fr3_new_h3)

            // new_div.appendChild(fr1_new_p[0]);

            body.appendChild(new_div);
        }
    }

}

let grid1 = new grid(10);
grid1.create("Toronto", "120", "Blah");