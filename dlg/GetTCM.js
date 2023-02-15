

exports.do = async (req, userContext, execContext) => {

    return [
        { code: "interfaces", name: "Interfaces & Mobility" },
        { code: "iot", name: "IoT" },
        { code: "integration", name: "Integration" },
        { code: "analytics", name: "Analytics" },
        { code: "compute", name: "Compute" },
        { code: "storage", name: "Storage" },
        { code: "productivity", name: "Productivity" },
        { code: "security", name: "Security & Identity" },
        { code: "network", name: "Networking" }
    ]
} 