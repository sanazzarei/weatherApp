export function createSearchElement() {
  const searchContainer = document.createElement('div');
  searchContainer.classList = 'search-container'
  const searchBox = document.createElement("input");
  searchBox.id = 'search-box'
  searchBox.type = "text";
  searchBox.placeholder="ENTER THE CITY NAME"
  searchContainer.appendChild(searchBox);
  const searchButton = document.createElement("button");
  searchButton.id = 'search-button';
  searchButton.innerHTML =
    "<img id = 'search-icon' src='./assets/img/loupe.png'  alt='search icon'  />";
  searchContainer.appendChild(searchButton);
  return searchContainer;
}
