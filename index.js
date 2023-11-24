const express = require('express');
const morgan = require('morgan');
const port = 3000;
const app = express();

app.use(morgan('dev'));
app.use(express.static("public"));

app.get("/", (req, res)=>{
    const blog = [{
        "blog title": "Exploring the Future of Artificial Intelligence",
        "blog snippet": "Dive into the evolving world of AI, where possibilities are endless and the future is now. Explore the latest trends and predictions.",
        "blog body": "Artificial Intelligence (AI) has transformed from a niche field into a cornerstone of technological advancement. This blog post explores the current state of AI, its potential future developments, and the ethical considerations surrounding it."
    },
    {
        "blog title": "Blockchain Beyond Bitcoin: A New Era of Technology",
        "blog snippet": "Uncover the versatile applications of blockchain technology beyond cryptocurrencies. Discover how blockchain is revolutionizing various sectors.",
        "blog body": "While blockchain is widely known for its role in cryptocurrencies like Bitcoin, its applications extend far beyond. This blog post explores how blockchain technology is revolutionizing other industries, including supply chain management, voting systems, and digital identity verification."
    },
    {
        "blog title": "Demystifying Quantum Computing: The Next Technological Revolution",
        "blog snippet": "Explore the complex world of quantum computing and its potential to redefine computing as we know it. Understand the principles and applications.",
        "blog body": "Quantum computing represents a paradigm shift in the computing world, with the potential to solve complex problems that are currently intractable for classical computers. This blog post introduces the fundamentals of quantum computing, including qubits, superposition, and entanglement."
    },
    {
        "blog title": "Machine Learning: Transforming Data into Insights",
        "blog snippet": "Unravel the power of machine learning in turning vast amounts of data into actionable insights. Explore its applications and future potential.",
        "blog body": "Machine Learning (ML) has become a key driver in extracting insights and making informed decisions from large datasets. This blog post covers the basics of ML, including supervised, unsupervised, and reinforcement learning."
    },
    {
        "blog title": "Cybersecurity in the Digital Age: Protecting Our Digital World",
        "blog snippet": "Understand the critical importance of cybersecurity in today's interconnected world. Explore the latest threats and strategies for protection.",
        "blog body": "As our reliance on digital technology grows, so does the importance of cybersecurity. This blog post provides an overview of the current cybersecurity landscape, discussing the types of threats such as malware, ransomware, and phishing attacks. It delves into the methods used by cybercriminals and the vulnerabilities they exploit."
    }];
    res.render("index.ejs", {title: "Home", blogs: blog});
});

app.get("/about", (req, res)=>{
    res.render("about.ejs", {title: "About"});
});

app.get("/blog-create", (req, res)=>{
    res.render("create-blog.ejs", {title: "Create Blog"});
});

app.listen(port, (err)=>{
    if(err) throw err;
    console.log(`Listening for requests on ${port}`);
});
