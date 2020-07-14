import React from "react";

import "./collectionPreview.style.scss";

import CollectionItems from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {/* Always note that if the array is very large as it gets executed every time the page refreshes it will coz lot of computation */}
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...otherCollectionItems }) => (
            <CollectionItems key={id} {...otherCollectionItems} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
