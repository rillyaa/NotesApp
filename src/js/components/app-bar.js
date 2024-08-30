class appBar extends HTMLElement {
  constructor() {
    super();

    const nav = document.createElement("nav");
    nav.innerHTML = `
        <div class="nav-logo">Notes App.</div>
        <div class="search">
            <input type="text-search" class="searchTerm" placeholder="What Note Today?">
            <button type="search-submit" class="searchButton">
            <box-icon name='search-alt' size='20px' color='#430A5D'></box-icon>
            </button>
        </div>
      `;

    const style = document.createElement("style");
    style.textContent = `
        nav {
          display: grid;
          grid-template-columns: 1fr auto; /* Satu kolom untuk logo dan satu kolom untuk pencarian */
          align-items: center;
          padding: 0 20px;
          background-color: #A367B1;
        }

        .nav-logo {
          display: flex;
          text-decoration: none;
          font-size: 24px;
          font-weight: bold;
          color: white;
          margin-left: 30px;
          margin-top: 15px;
          margin-bottom: 15px;
        }
  
        .search {
          display: flex;
          align-items: center;
          border-radius: 50px;
          margin-right: 25px;
        }
  
        .searchTerm {
          height: 30px;
          padding: 8px;
          border: 1px solid transparent;
          border-radius: 13px;
          width: 100%;
          box-sizing: border-box;
          margin-top: 5px;
          outline: none;
        }
  
        .searchTerm:focus {
          outline: 2px solid #be01e4;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
  
        ::placeholder {
          padding-left: 5px;
        }
  
        .searchButton {
          background-color: white;
          margin-left: -14%;
          margin-top: 5px;
          border-radius: 50%;
          width: 30px;
          height: 30px;
          border: none;
          align-items: center;
          font-size: 15px;
        }
  
        .searchButton:hover {
          background-color: rgba(0, 0, 0, 0.1);
        }
      `;

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(nav);
    this.shadowRoot.appendChild(style);
  }
}

customElements.define("app-bar", appBar);
