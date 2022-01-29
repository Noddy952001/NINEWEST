function navbar(){
    return `<div id="vnavbar">
    <div onclick="newpage()">NEW</div>
    <div onclick="">SHOES</div>
    <div onclick="">HEELS</div>
    <div onclick="">BOOTS & BOOTIES</div>
    <div onclick="">FLATS</div>
    <div onclick="">HANDBAGS</div>
    <div onclick="">WATCH</div>
    <div onclick="">N.I.N.E</div>
    <div onclick="">SALE</div>
</div>


<div id="vcombination">

    <select name=""  id="handelcolor" onchange="handelcolor()" >
        <option value="">Color</option>
        <option value="red">Red</option>
        <option value="pink">Pink</option>
        <option value="multi">Multi</option>
        <option value="black">black</option>
        <option value="yellow">yellow</option>
        <option value="cream">cream</option>
    </select>
    
    <select name=""  id="handelsize" onchange="handelsize()" >
        <option value="">Size</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
    </select>

    <select name=""  id="handelwidth" onchange="handelwidth()" >
        <option value="">Width</option>
        <option value="M">M</option>
        <option value="W">w</option>
    </select>

    <select name=""  id="handelheight" onchange="handelheight()" >
        <option value="">Heel Height</option>
        <option value="Heigh">Heigh</option>
        <option value="Low">Low</option>
        <option value="Mid">Mid</option>
    </select>

    
    <select name=""  id="handelcatgory" onchange="handelcatgory()" >
        <option value="">Category</option>
        <option value="Boot">Boot</option>
        <option value="Flats">Flats</option>
        <option value="Heels">Heels</option>
    </select>

    <select name=""  id="handelprice" onchange="handelprice()" >
        <option value="">Price</option>
        <option value="89.00">Under$109</option>
        <option value="109.00">Under$170</option>
        <option value="209.00">Under$260</option>
    </select>

    <select name=""  id="lab" onchange="handelpriceshort()" >
        <option value="">FEATURE</option>                                  
        <option value="low">Low to High</option>
        <option value="high">High to Low</option>
    </select>
</div>

<div id="vheels"></div>`
}

export default navbar