import client from "./client"

export const service = {
    register(entity) {
        const uri = "https://travel-website-007.herokuapp.com/login/signup"
        return client.post(uri, entity)
    },
 
    loging(entity) {
        const uri = "https://travel-website-007.herokuapp.com/login/token-json"
        return client.post(uri, entity)
    },

    getAllTour() {
        const uri = "https://travel-website-007.herokuapp.com/tours/get-tours?limit=10000"
        return client.get(uri)
    },

    getType() {
        const uri = "https://travel-website-007.herokuapp.com/type/get-all"
        return client.get(uri)
    },
    
    getTypeDetail(id) {
        const uri = "https://travel-website-007.herokuapp.com/type/get?id="+id
        return client.get(uri)
    },

    getPlace() {
        const uri = "https://travel-website-007.herokuapp.com/place/get-all"
        return client.get(uri)
    },

    getPlaceDetail(id) {
        const uri = "https://travel-website-007.herokuapp.com/place/get?id="+id
        return client.get(uri)
    },

    updateInfoUser(entity) {
        const uri = "https://travel-website-007.herokuapp.com/login/edit"
        return client.post(uri, entity)
    },

    bookTour(entity) {
        const uri = "https://travel-website-007.herokuapp.com/order/create"
        return client.post(uri, entity)
    }, 


    getDetailTour(id) {
        const uri = "https://travel-website-007.herokuapp.com/tours/tour/get/"+id
        return client.get(uri)
    },


    cancelTour(id) {
        const uri = "https://travel-website-007.herokuapp.com/order/delete?id=" + id
        return client.delete(uri)
    },

    getProfile() {
        const uri = "https://travel-website-007.herokuapp.com/login/profile"
        return client.get(uri)
    },

    getOrder() {
        const uri = "https://travel-website-007.herokuapp.com/order/get-your-order"
        return client.get(uri)
    },

    getOrderDetail(id) {
        const uri = "https://travel-website-007.herokuapp.com/order/get?id=" + id
        return client.get(uri)
    },

    getUnconfimOrder(){
        const uri = "https://travel-website-007.herokuapp.com/order/get-all-your-unconfirmed-order"
        return client.get(uri)
    },

    getRoute (id) {
        const uri = "https://travel-website-007.herokuapp.com/routes/get-by-tour-id?tour_id=" + id
        return client.get(uri)
    },

    getImg (id) {
        const uri = "https://travel-website-007.herokuapp.com/image/get?tour_id=" + id
        return client.get(uri)
    },

    checkAdmin() {
        const uri = "https://travel-website-007.herokuapp.com/login/isAdmin"
        return client.get(uri)
    },

    adminGetAllTour(skip = 0) {
        const uri = "https://travel-website-007.herokuapp.com/tours/get-tours?limit=10&skip=" + skip
        return client.get(uri)
    },

    adminDeleteTour(id) {
        const uri = "https://travel-website-007.herokuapp.com/tours/delete?tour_id=" + id
        return client.delete(uri)
    },

    adminGetOrder() {
        const uri = "https://travel-website-007.herokuapp.com/order/get-all-unconfirmed-order-admin"
        return client.get(uri)
    },

    adminConfirm(id) {
        const uri = "https://travel-website-007.herokuapp.com/order/confirm-order?order_id=" + id
        return client.get(uri)
    },

    adminDestroyOder(id) {
        const uri = "https://travel-website-007.herokuapp.com/order/delete?id=" + id
        return client.delete(uri)
    },

    adminCreateTour(entity) {
        const uri = "https://travel-website-007.herokuapp.com/tours/create" 
        return client.post(uri, entity)
    },

    adminCreateImg(id, entity) {
        const uri = "https://travel-website-007.herokuapp.com/image/create" 
        const data = {
            ...entity,
            tour_id: id
        }
        return client.post(uri, data)
    },

    adminCreateRoute(id, entity) {
        const data = {
            ...entity,
            tour_id: id
        }
        const uri = "https://travel-website-007.herokuapp.com/routes/create" 
        return client.post(uri, data) 
    },
}
