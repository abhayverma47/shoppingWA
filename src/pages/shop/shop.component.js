import React from "react";

import ShopData from "./shopData";

import CollectionPreview from "../../components/collectionPreview/collectionPreview.component";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: ShopData,
    };
  }

  render() {
    return (
      <div>
        {this.state.collection.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
