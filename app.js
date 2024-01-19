const User = require('./models/users');
const Article = require('./models/articles');
const Order = require('./models/orders');

// Add your own requires here 😉
require('./models/connection');
/*
** Articles
*/

function displayAllArticles() {
	Article.find().then(data => {
		console.log('ARTICLES =>', data);
	});
}

function displayArticleByName(articleName) {
	Article.findOne({ name: articleName }).then(data => {
		console.log('ARTICLE =>', data);
	});
}

function displayArticleByID(articleId) {
	Article.findById(articleId).then(data => {
		console.log('ARTICLE =>', data);
	});
}

function updateArticlePrice(articleId, newPrice) {
	Article.updateOne({ _id: articleId }, { price: newPrice }).then(() => {
		console.log(`Price updated for ${articleId}`);
	});
}

function updateArticleStock(articleId, newStock) {
	Article.updateOne({ _id: articleId }, { stock: newStock }).then(() => {
		console.log(`Stock updated for ${articleId}`);
	});
}

function resetStocks() {
	Article.updateMany({}, { stock: 0 }).then(() => {
		console.log(`Stocks successfully reset`);
	});
}


/*
** Users
*/
//Display all user
function displayAllUsers() {
	User.find().then(data => {
		console.log(data)
	})
 };
//displayAllUsers()

//delete user by ID
function deleteUser(userId) {
	User.deleteOne({_id: userId}).then(()=>{
		User.find().then(data=>{
			console.log(data)
		})
	})
 };

//deleteUser("65aa420e48d45181fe1a8699")
/*
** Orders
*/
//Display all orders
function displayAllOrders() {
	Order.find().then(data =>{
		console.log(data)
	})
 }

//displayAllOrders()

function updateOrderPaymentStatus(orderId, isPaid) {
	Order.updateOne(
		{_id: orderId},
		{isPaid: true}
	).then(()=>{
		Order.find().then(data=>{
			console.log(data)
		})
	})
 }

 //updateOrderPaymentStatus('65aa420248d45181fe1a868f')

function deleteOrder(orderId) {
	Order.deleteOne({_id:orderId}).then(()=>{
		Order.find().then(data=>{
			console.log(data)
		})
	})
 }

 deleteOrder('65aa420248d45181fe1a868f')


// Do not edit/remove code under this line
module.exports = {
	displayAllArticles,
	displayArticleByName,
	displayArticleByID,
	updateArticlePrice,
	updateArticleStock,
	resetStocks,
	displayAllUsers,
	deleteUser,
	displayAllOrders,
	updateOrderPaymentStatus,
	deleteOrder,
};
