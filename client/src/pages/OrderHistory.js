import React from "react";
import { Link } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

function OrderHistory() {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  return (
    <>
      <div style={{ height: "100%" }} className="container pb-4">
        <Link to="/">← Back to Products</Link>

        {user ? (
          <>
            <h2>
              Order History for {user.firstName} {user.lastName}
            </h2>
            {user.orders.map((order) => (
              <div key={order._id} className="my-2">
                <div className="flex-row">
                  {order.products.map(({ _id, image, name, price }, index) => (
                    <div className="card mt-5 column has-background-white">
                      <h3>Puchased on {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}</h3>
                      <div key={index} className="card-image my-4">
                        <figure>
                          <Link to={`/products/${_id}`}>
                            <img alt={name} src={`/images/${image}`} />
                            <div>
                              <p className="title is-4 has-text-centered">{name}</p>
                              <p className="subtitle is-6 has-text-centered">You last paid ${price} for this item</p>
                            </div>
                          </Link>
                        </figure>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        ) : null}
      </div>
    </>
  );
}

export default OrderHistory;
