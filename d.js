document.addEventListener("DOMContentLoaded", function () {
    // Replace this with actual data fetching from MySQL using Ballerina
    let customer = {
        firstName: "Saman",
        lastName: "Perera",
        nic: "199570100887",
        address: "16, Neel Road, Dalathura",
        town: "Ja-Ela",
        contactNumber: "0771245689",
        whatsappNumber: "0771245689",
        // profilePicture: "path/to/profile/pic.jpg"
        profilePicture: "assests/profile.png"
    };

    document.getElementById("first-name").innerText = customer.firstName;
    document.getElementById("last-name").innerText = customer.lastName;
    document.getElementById("nic").innerText = customer.nic;
    document.getElementById("address").innerText = customer.address;
    document.getElementById("town").innerText = customer.town;
    document.getElementById("contact-number").innerText = customer.contactNumber;
    document.getElementById("whatsapp-number").innerText = customer.whatsappNumber;
    document.getElementById("profile-pic").src = customer.profilePicture;

    // Simulating dynamic order history
    let orders = [
        { orderNo: "56001", order: "12.5kg Refill", amount: "4190.00", date: "2024-09-29 04:10:35", status: "Ready to Dispatch" },
        { orderNo: "49857", order: "5kg Refill", amount: "4190.00", date: "2024-08-27 04:10:35", status: "Completed" },
        { orderNo: "32100", order: "12.5kg Refill", amount: "4190.00", date: "2024-08-02 04:10:35", status: "Completed" },
        { orderNo: "21555", order: "12.5kg Refill", amount: "3800.00", date: "2024-06-30 04:10:35", status: "Completed" },
        { orderNo: "204445", order: "5kg New", amount: "1800.00", date: "2024-05-29 04:10:35", status: "Completed" }
    ];

    let orderTable = document.getElementById("order-table");
    orders.forEach(order => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${order.orderNo}</td>
            <td>${order.order}</td>
            <td>${order.amount}</td>
            <td>${order.date}</td>
            <td>${order.status}</td>
        `;
        orderTable.appendChild(row);
    });
});
