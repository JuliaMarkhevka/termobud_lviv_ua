const graphLink = document.querySelector('#graph_link');
const graphImg = document.querySelector('#graph_img');

graphLink.style.color = 'red';

graphLink.addEventListener('click', showGraph);
graphImg.addEventListener('click', showGraph);


function showGraph() {
    const productsContainer = document.querySelector('.catalog-content');

    productsContainer.innerHTML = `<div class="graph-eps container" id="graph-eps">
            <div class="graph-content">
                <div class="graph-eps-type">
                    <div>
                        <img src="img/graph-70.png" alt=""></img>

                    </div>

                </div>


                <div class="graph-eps-type">
                    <div>
                        <img src="img/graph-80.png" alt=""></img>

                    </div>

                </div>
            </div>
            <table class="eps-specs">
                <caption>Характеристики</caption>
                <tr>
                    <th></th>
                    <th class="width-40">М-35 термо-1 EPS-70</th>
                    <th class="width-40">М-35 термо-1 EPS-80</th>
                </tr>

                <tr>
                    <td class="width-20">- міцність на стиск при 10% лінійній деформації</td>
                    <td class="width-40">- 70 кPа</td>
                    <td class="width-40">- 80 кPа</td>
                </tr>

                <tr>
                    <td class="width-20">- коефіцієнт теплопровідності</td>
                    <td class="width-40">- 0,0375 W/mK</td>
                    <td class="width-40">- 0,037 W/mK</td>
                </tr>

                <tr>
                    <td class="width-20">- водопоглинання за 24 год</td>
                    <td class="width-40">- 3%</td>
                    <td class="width-40">- 2%</td>
                </tr>

                <tr>
                    <td class="width-20">- стійкість до розриву</td>
                    <td class="width-40">- 115 кPа</td>
                    <td class="width-40">- 125 кP</td>
                </tr>


            </table>


            <div class="graph-text">
                <p>Графітовий пінопласт характеризується кращими теплоізоляційними властивостями у порівнянні із
                    звичайним білим. Завдяки
                    домішкам невеликої кількості графіту забезпечується нижчий показник теплопровідності (до 20%).
                    Це означає менші втрати
                    тепла при однаковій товщині ізоляції або можливість використання тоншого шару для досягнення
                    того самого ефекту.</p>
            </div>
        </div>`;


}


