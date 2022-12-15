function Menu({menuType, productList, onMenuItemClick}) {
   
    return (
      productList.map((product) => {
        const buttonLabel = menuType === "breakfast" ?
          `${product.name} - ${product.price}` :
          `${product.name} - ${product.flavor} - ${product.complement} - ${product.price}`;
        if (product.type.includes(menuType)) {
          return (
            <button key={product.id} onClick={() => onMenuItemClick(product)} className="add-itens">
              {buttonLabel}
            </button>
          )
        }
      })
    )
  }

  export default Menu;