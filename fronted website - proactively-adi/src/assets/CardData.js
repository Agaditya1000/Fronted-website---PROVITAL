import { nutrition, physical_activity, restorative_sleep, stress_management, social_connection, substance_abuse } from "./imports";
import { nutritionmetricicon, physical_activitymetricicon, restorative_sleepmetricicon, stress_managementmetricicon, substance_abusemetricicon } from "./imports";


const cardData = [
    {
        id: 1,
        title: "Nutrition",
        description: "Evidence supports the use of a whole food, plant-predominant diet to prevent, treat and reverse chronic illness.",
        metric: "121/80",
        submetric: "mmHg",
        metricicon: nutritionmetricicon,
        image: nutrition
    },
    {
        id: 2,
        title: "Physical activity",
        description: "Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease.",
        metric: "32",
        submetric: "minutes",
        metricicon: physical_activitymetricicon,
        image: physical_activity
    },
    {
        id: 3,
        title: "Restorative sleep",
        description: "Consistent, quality sleep is essential for cognitive function and physical health.",
        metric: "8",
        submetric: "hours",
        metricicon: restorative_sleepmetricicon,
        image: restorative_sleep
    },
    {
        id: 4,
        title: "Stress management",
        description: "Effective stress management techniques are crucial for mental well-being and overall health.",
        metric: "60",
        submetric: "minutes",
        metricicon: stress_managementmetricicon,
        image: stress_management
    },
    {
        id: 5,
        title: "Social connection",
        description: "Strong social connections are associated with a lower risk of many chronic diseases and enhanced mental health.",
        metric: "Feeling",
        submetric: "better",
        metricicon: physical_activitymetricicon,
        image: social_connection
    },
    {
        id: 6,
        title: "Substance abuse",
        description: "Avoiding tobacco, limiting alcohol use, and abstaining from harmful substances are vital for long-term health.",
        metric: "62",
        submetric: "days",
        metricicon: substance_abusemetricicon,
        image: substance_abuse
    }
];

export default cardData;
