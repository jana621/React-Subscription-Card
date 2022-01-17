import './App.css';


function app(){
return(
    <div className="App">
        <Plan/>
    </div>
)
}


function Plan(){
    const plans=
    [
        {
            name: "FREE", price: 0, features:[
            "Single User",
            "5GB Storage",
            "Unlimited Public Projects",
            "Community Access",
            "Unlimited Private Projects",
            "Dedicated Phone Support",
            "Free Subdomain",
            "Monthly Status Reports"]
        },
        {
            name: "PLUS", price: 99, features:[
            "5 Users",
            "50GB Storage",
            "Unlimited Public Projects",
            "Community Access",
            "Unlimited Private Projects",
            "Dedicated Phone Support",
            "Free Subdomain",
            "Monthly Status Reports"]
        },
        {
            name: "PRO", price: 199, features:[
            "Unlimited Users",
            "150GB Storage",
            "Unlimited Public Projects",
            "Community Access",
            "Unlimited Private Projects",
            "Dedicated Phone Support",
            "Unlimited Free Subdomains",
            "Monthly Status Reports"]
        }
    ];

    return(
        <div>
            {plans.map((plan=>(<Card name = {plan.name} price = {plan.price} features = {plan.features}/>)))}
        </div>
    );
}  
    
    function Card(props){

        return <div className = "card">

                    <p className="plan-name">{props.name}</p>
                    <p className="price">${props.price}<span className="price-duration">/month</span></p>
                    <ul className="features">
                        {props.features.map((feature=>(<li>{feature}</li>)))}
                    </ul>
                    <button className="buy">BUY</button>
            </div>
    };

    export default app;


    