import { Order, orderDetailItem, OrderSheet } from "@/models/order.model";
import { httpClient, requestHandler } from "@/api/http";

export const order = async (orderData: OrderSheet) => {
  return await requestHandler("post", "/orders", orderData);
  // const response = await httpClient.post("/orders", orderData);
  // return response.data;
}

export const fetchOrders = async () => {
  // return await requestHandler("get", "/orders");
  const response = await httpClient.get<Order[]>("/orders");
  return response.data;
}

export const fetchOrder = async (orderId: number) => {
  // return await requestHandler("get", `/orders/${orderId}`);
  const response = await httpClient.get<orderDetailItem[]>(`/orders/${orderId}`);
  return response.data;
}