

exports.do = async (req, userContext, execContext) => {

    return [
        { level: 1, code: "interfaces", name: "Interfaces & Mobility" },
        { level: 1, code: "iot", name: "IoT" },
        { level: 1, code: "integration", name: "Integration" },
        { level: 1, code: "analytics", name: "Analytics" },
        { level: 1, code: "compute", name: "Compute" },
        { level: 1, code: "storage", name: "Storage" },
        { level: 1, code: "productivity", name: "Productivity" },
        { level: 1, code: "security", name: "Security & Identity" },
        { level: 1, code: "network", name: "Networking" }
    ]
} 