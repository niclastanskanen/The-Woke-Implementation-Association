paypal.Button.render({
    // Configure environment
    env: 'sandbox',
    client: {
        sandbox: 'AUCmbk3eZR20dAPobiVGQVQC9DfItlJoTM1eVonkot_dP-NNwy4rP3umzGtnMAXk6-rwelFYxMQWHmlm',
        production: 'demo_production_client_id'
    },
    // Customize button (optional)
    locale: 'en_US',
    style: {
        size: 'large',
        color: 'blue',
        shape: 'rect',
    },

    // Enable Pay Now checkout flow (optional)
    commit: true,

    // Set up a payment
    payment: function (data, actions) {
        return actions.payment.create({
            transactions: [{
                amount: {
                    total: '100',
                    currency: 'EUR'
                }
            }]
        });
    },
    // Execute the payment
    onAuthorize: function (data, actions) {
        return actions.payment.execute().then(function () {
            // Show a confirmation message to the buyer
            window.location.href = '/confirmation';
        });
    }
}, '#paypal-button');