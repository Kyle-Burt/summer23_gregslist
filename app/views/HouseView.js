export const HouseView = /*HTML*/`
    <div class="container-fluid">
        <section class="row">
            <div class="col-12 p-4 d-flex">
            <h1>Houses</h1>
            <button class="btn btn-primary ms-3" type="button" data-bs-toggle="collapse" data-bs-target="#carCollapse" aria-expanded="false" aria-controls="collapseExample">
            House Form
            </button>
            </div>
        </section>
    <section class="row">
        <div class="col-10 m-auto">
            <div class="collapse" id="carCollapse">
                <div class="card card-body">
                    <form onsubmit="app.HousesController.createHouse(event)">
                        <div>
                            <label for="houseName">Name</label>
                            <input type="text" id="houseName" minlength="5" maxlength="30" required name="name">
                        </div>
                        <div>
                            <label for="houseYear">Year</label>
                            <input type="number" id="houseYear" minlength="5" maxlength="30" required name="year">
                        </div>
                        <div>
                            <label for="houseBedrooms">Bedrooms</label>
                            <input type="number" id="houseBedrooms" minlength="5" maxlength="30" required name="bedrooms">
                        </div>
                        <div>
                            <label for="houseBathrooms">Bathrooms</label>
                            <input type="number" id="houseBathrooms" minlength="5" maxlength="30" required name="bathrooms">
                        </div>
                        <div>
                            <label for="houseSqft">Sqft</label>
                            <input type="number" id="houseSqft" minlength="5" maxlength="30" required name="sqft">
                        </div>
                        <div>
                            <label for="housePrice">Price</label>
                            <input type="number" id="housePrice" minlength="5" maxlength="30" required name="price">
                        </div>
                        <div>
                            <label for="houseImg">Image URL</label>
                            <input type="url" id="houseImg" maxlength="300" required name="img">
                        </div>
                        <div>
                            <label for="houseDescription">Description</label>
                            <textarea id="houseDescription" name="description" rows="10" class="w-50">
                            </textarea>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
        <section id="houseListing" class="row mt-3">
        </section>
    </div>
`