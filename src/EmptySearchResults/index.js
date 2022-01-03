import React from 'react';

function EmptySearchResults({searchText}) {
    return (
        <p>No hay resultados de búsqueda para {searchText}</p>
    );
}

export { EmptySearchResults };