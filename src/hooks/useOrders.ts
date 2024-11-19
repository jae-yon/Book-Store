import { useEffect, useState } from "react";
import { OrderListItem } from "../models/order.model";
import { fetchOrder, fetchOrders } from "../api/order.api";

export const useOrders = () => {

  const [orders, setOrders] = useState<OrderListItem[]>([]);
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

  useEffect(() => {
    fetchOrders().then((orders) => {
      setOrders(orders);
    });
  }, []);

  // 주문 정보 자세히보기 
  const selectOrderItem = (orderId : number) => {
    // 요청 방어
    if (orders.filter((item) => item.id === orderId)[0].detail) {
      setSelectedItemId(orderId);
      return;
    }

    fetchOrder(orderId).then((orderDetail) => {
      setSelectedItemId(orderId);
      setOrders(
        // 데이터 값 재정의
        orders.map((item) => {
          if (item.id === orderId) {
            return {
              ...item,
              detail: orderDetail
            }
          }
          return item;
        })

      )
    });
  }

  return { orders, selectedItemId, selectOrderItem }
}