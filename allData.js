let currentDateForStoring = null;

// For Printing day Mind Map at Calender
let referenceprintAllMindMapAtCalendarDate = null;
let daysMindMap = {};

let CalendarMindMapID = null;
let CalendarMindMapData = null;
let currentFileName = "";
let currentMindMapData = null;
let isCreatingMindMap = false;


// Calendar Days Data
let daysData = {
    "1-January-2025": [
        {
            "title": "Wake up early",
            "priority": "High",
            "status": "active",
            "details": "Wake up at 6:00 AM for the day.",
            "startTime": "06:00",
            "endTime": "06:30",
            "priortiy": "<img src=\"./images/fire.png\"> Highest"
        },
        {
            "title": "Complete Coding Practice",
            "priority": "Priority",
            "status": "active",
            "details": "Complete 1 hour of coding exercises.",
            "startTime": "09:00",
            "endTime": "10:00",
            "priortiy": "<img src=\"./images/jewelry.png\"> High"
        },
        {
            "title": "Lunch Break",
            "priority": "Low",
            "status": "inactive",
            "details": "Take a lunch break.",
            "startTime": "12:00",
            "endTime": "13:00",
            "priortiy": "<img src=\"./images/silver-medal.png\"> Low"
        },
        {
            "title": "Go for a walk",
            "priority": "Medium",
            "status": "active",
            "details": "Take a 30-minute walk around the neighborhood.",
            "startTime": "17:00",
            "endTime": "17:30",
            "priortiy": "<img src=\"./images/coin.png\"> Medium"
        }
    ],
    "2-January-2025": [
        {
            "title": "Morning Meditation",
            "priority": "High",
            "status": "active",
            "details": "Meditate for 20 minutes to start the day.",
            "startTime": "06:00",
            "endTime": "06:20",
            "priortiy": "<img src=\"./images/fire.png\"> Highest"
        },
        {
            "title": "Work on Project",
            "priority": "Priority",
            "status": "active",
            "details": "Work on completing the project report.",
            "startTime": "09:00",
            "endTime": "12:00",
            "priortiy": "<img src=\"./images/jewelry.png\"> High"
        },
        {
            "title": "Lunch Break",
            "priority": "Low",
            "status": "inactive",
            "details": "Enjoy a lunch break and relax.",
            "startTime": "13:00",
            "endTime": "14:00",
            "priortiy": "<img src=\"./images/silver-medal.png\"> Low"
        },
        {
            "title": "Read a Book",
            "priority": "Medium",
            "status": "active",
            "details": "Read 20 pages of 'The Lean Startup'.",
            "startTime": "15:00",
            "endTime": "15:30",
            "priortiy": "<img src=\"./images/coin.png\"> Medium"
        }
    ],
    "3-January-2025": [
        {
            "title": "Wake up early",
            "priority": "High",
            "status": "active",
            "details": "Wake up at 6:00 AM to start the day.",
            "startTime": "06:00",
            "endTime": "06:30",
            "priortiy": "<img src=\"./images/fire.png\"> Highest"
        },
        {
            "title": "Complete Homework",
            "priority": "Priority",
            "status": "active",
            "details": "Finish all homework assignments.",
            "startTime": "09:00",
            "endTime": "11:00",
            "priortiy": "<img src=\"./images/jewelry.png\"> High"
        },
        {
            "title": "Lunch Break",
            "priority": "Low",
            "status": "inactive",
            "details": "Relax and enjoy your lunch.",
            "startTime": "12:00",
            "endTime": "13:00",
            "priortiy": "<img src=\"./images/silver-medal.png\"> Low"
        },
        {
            "title": "Go for a Jog",
            "priority": "Medium",
            "status": "inactive",
            "details": "Jog for 30 minutes around the park.",
            "startTime": "16:00",
            "endTime": "16:30",
            "priortiy": "<img src=\"./images/coin.png\"> Medium"
        }
    ],
    "4-January-2025": [
        {
            "title": "Morning Yoga",
            "priority": "Medium",
            "status": "active",
            "details": "Practice yoga for 30 minutes.",
            "startTime": "06:30",
            "endTime": "07:00",
            "priortiy": "<img src=\"./images/jewelry.png\"> High"
        },
        {
            "title": "Complete Coding",
            "priority": "Priority",
            "status": "active",
            "details": "Work on coding assignments for 2 hours.",
            "startTime": "09:00",
            "endTime": "11:00",
            "priortiy": "<img src=\"./images/fire.png\"> Highest"
        },
        {
            "title": "Lunch Break",
            "priority": "Low",
            "status": "inactive",
            "details": "Take a break and have lunch.",
            "startTime": "12:00",
            "endTime": "13:00",
            "priortiy": "<img src=\"./images/silver-medal.png\"> Low"
        },
        {
            "title": "Watch a Motivational Video",
            "priority": "Low",
            "status": "inactive",
            "details": "Watch a 20-minute video on personal development.",
            "startTime": "15:00",
            "endTime": "15:20",
            "priortiy": "<img src=\"./images/silver-medal.png\"> Low"
        }
    ],
    "5-January-2025": [
        {
            "title": "Wake up early",
            "priority": "High",
            "status": "active",
            "details": "Wake up at 6:00 AM and start the day.",
            "startTime": "06:00",
            "endTime": "06:30",
            "priortiy": "<img src=\"./images/fire.png\"> Highest"
        },
        {
            "title": "Homework",
            "priority": "<img src=\"./images/fire.png\"> Highest",
            "status": "active",
            "details": "Complete math homework assignments.",
            "startTime": "09:00",
            "endTime": "11:00",
            "priortiy": "<img src=\"./images/fire.png\"> Highest"
        },
        {
            "title": "Walking",
            "priority": "Priority",
            "status": "active",
            "details": "Take a 30-minute walk in the park.",
            "startTime": "17:00",
            "endTime": "17:30",
            "priortiy": "<img src=\"./images/silver-medal.png\"> Low"
        },
        {
            "title": "Read a Book",
            "priority": "High",
            "status": "active",
            "details": "Read 20 pages of the book 'Atomic Habits'.",
            "startTime": "19:00",
            "endTime": "20:00",
            "priortiy": "<img src=\"./images/coin.png\"> Medium"
        },
        {
            "title": "Exercise",
            "priority": "Medium",
            "status": "active",
            "details": "Do a 15-minute workout session.",
            "startTime": "06:00",
            "endTime": "06:15",
            "priortiy": "<img src=\"./images/jewelry.png\"> High"
        }
    ],
    "6-January-2025": [
        {
            "title": "Wake up early",
            "priority": "Priority",
            "status": "inactive",
            "details": "Wake up at 6:00 AM and start the day.",
            "startTime": "06:00",
            "endTime": "06:30",
            "priortiy": "<img src=\"./images/fire.png\"> Highest"
        },
        {
            "title": "Complete Coding Practice",
            "priority": "Priority",
            "status": "active",
            "details": "Finish coding exercises.",
            "startTime": "09:00",
            "endTime": "11:00",
            "priortiy": "<img src=\"./images/jewelry.png\"> High"
        },
        {
            "title": "Lunch Break",
            "priority": "Low",
            "status": "inactive",
            "details": "Relax and enjoy lunch.",
            "startTime": "12:00",
            "endTime": "13:00",
            "priortiy": "<img src=\"./images/silver-medal.png\"> Low"
        },
        {
            "title": "Go for a Walk",
            "priority": "Medium",
            "status": "inactive",
            "details": "Go for a 20-minute walk.",
            "startTime": "15:00",
            "endTime": "15:20",
            "priortiy": "<img src=\"./images/coin.png\"> Medium"
        }
    ],
    "7-January-2025": [
        {
            "title": "Wake up early",
            "priority": "High",
            "status": "active",
            "details": "Wake up early and start your day.",
            "startTime": "06:00",
            "endTime": "06:30",
            "priortiy": "<img src=\"./images/fire.png\"> Highest"
        },
        {
            "title": "Complete Homework",
            "priority": "High",
            "status": "active",
            "details": "Complete homework assignments.",
            "startTime": "09:00",
            "endTime": "11:00",
            "priortiy": "<img src=\"./images/jewelry.png\"> High"
        },
        {
            "title": "Lunch Break",
            "priority": "Low",
            "status": "inactive",
            "details": "Enjoy your lunch break.",
            "startTime": "12:00",
            "endTime": "13:00",
            "priortiy": "<img src=\"./images/silver-medal.png\"> Low"
        },
        {
            "title": "Practice Yoga",
            "priority": "Medium",
            "status": "inactive",
            "details": "Do a 30-minute yoga session.",
            "startTime": "16:00",
            "endTime": "16:30",
            "priortiy": "<img src=\"./images/coin.png\"> Medium"
        }
    ],

    "8-January-2025": [
        {
            "title": "Wake up early",
            "priority": "High",
            "status": "active",
            "details": "Start the day early at 6:00 AM.",
            "startTime": "06:00",
            "endTime": "06:30",
            "priortiy": "<img src=\"./images/fire.png\"> Highest"
        },
        {
            "title": "Coding Practice",
            "priority": "High",
            "status": "active",
            "details": "Complete 2 hours of coding exercises.",
            "startTime": "09:00",
            "endTime": "11:00",
            "priortiy": "<img src=\"./images/jewelry.png\"> High"
        },
        {
            "title": "Lunch Break",
            "priority": "Low",
            "status": "inactive",
            "details": "Take a break and enjoy lunch.",
            "startTime": "12:00",
            "endTime": "13:00",
            "priortiy": "<img src=\"./images/silver-medal.png\"> Low"
        },
        {
            "title": "Read a Book",
            "priority": "Medium",
            "status": "active",
            "details": "Read a chapter of your book for 30 minutes.",
            "startTime": "16:00",
            "endTime": "16:30",
            "priortiy": "<img src=\"./images/coin.png\"> Medium"
        }
    ],
    "9-January-2025": [
        {
            "title": "Morning Exercise",
            "priority": "Medium",
            "status": "active",
            "details": "Do 20 minutes of stretching exercises.",
            "startTime": "06:00",
            "endTime": "06:20",
            "priortiy": "<img src=\"./images/jewelry.png\"> High"
        },
        {
            "title": "Complete Homework",
            "priority": "High",
            "status": "active",
            "details": "Complete all homework assignments.",
            "startTime": "09:00",
            "endTime": "11:00",
            "priortiy": "<img src=\"./images/fire.png\"> Highest"
        },
        {
            "title": "Lunch Break",
            "priority": "Low",
            "status": "inactive",
            "details": "Relax and enjoy lunch.",
            "startTime": "12:00",
            "endTime": "13:00",
            "priortiy": "<img src=\"./images/silver-medal.png\"> Low"
        },
        {
            "title": "Go for a Walk",
            "priority": "Medium",
            "status": "inactive",
            "details": "Walk for 30 minutes in the park.",
            "startTime": "17:00",
            "endTime": "17:30",
            "priortiy": "<img src=\"./images/coin.png\"> Medium"
        }
    ],
    "10-January-2025": [
        {
            "title": "Wake up early",
            "priority": "High",
            "status": "active",
            "details": "Wake up at 6:00 AM to start the day.",
            "startTime": "06:00",
            "endTime": "06:30",
            "priortiy": "<img src=\"./images/fire.png\"> Highest"
        },
        {
            "title": "Project Work",
            "priority": "Priority",
            "status": "active",
            "details": "Work on the ongoing project for 3 hours.",
            "startTime": "09:00",
            "endTime": "12:00",
            "priortiy": "<img src=\"./images/jewelry.png\"> High"
        },
        {
            "title": "Lunch Break",
            "priority": "Low",
            "status": "inactive",
            "details": "Enjoy your lunch break.",
            "startTime": "12:30",
            "endTime": "13:30",
            "priortiy": "<img src=\"./images/silver-medal.png\"> Low"
        },
        {
            "title": "Go for a Jog",
            "priority": "Medium",
            "status": "inactive",
            "details": "Jog for 30 minutes around the park.",
            "startTime": "16:00",
            "endTime": "16:30",
            "priortiy": "<img src=\"./images/coin.png\"> Medium"
        }
    ],
    "11-January-2025": [
        {
            "title": "Morning Meditation",
            "priority": "High",
            "status": "active",
            "details": "Meditate for 20 minutes.",
            "startTime": "06:00",
            "endTime": "06:20",
            "priortiy": "<img src=\"./images/fire.png\"> Highest"
        },
        {
            "title": "Study Session",
            "priority": "Priority",
            "status": "active",
            "details": "Study for 2 hours on the subject of DSA.",
            "startTime": "09:00",
            "endTime": "11:00",
            "priortiy": "<img src=\"./images/jewelry.png\"> High"
        },
        {
            "title": "Lunch Break",
            "priority": "Low",
            "status": "inactive",
            "details": "Relax and take a break for lunch.",
            "startTime": "12:00",
            "endTime": "13:00",
            "priortiy": "<img src=\"./images/silver-medal.png\"> Low"
        },
        {
            "title": "Exercise",
            "priority": "Medium",
            "status": "active",
            "details": "Do 20 minutes of full-body workout.",
            "startTime": "17:00",
            "endTime": "17:20",
            "priortiy": "<img src=\"./images/coin.png\"> Medium"
        }
    ],
    "12-January-2025": [
        {
            "title": "Wake up early",
            "priority": "High",
            "status": "active",
            "details": "Wake up at 6:00 AM to start the day.",
            "startTime": "06:00",
            "endTime": "06:30",
            "priortiy": "<img src=\"./images/fire.png\"> Highest"
        },
        {
            "title": "Complete Homework",
            "priority": "Priority",
            "status": "active",
            "details": "Complete all the assigned homework.",
            "startTime": "09:00",
            "endTime": "11:00",
            "priortiy": "<img src=\"./images/jewelry.png\"> High"
        },
        {
            "title": "Lunch Break",
            "priority": "Low",
            "status": "inactive",
            "details": "Enjoy a break and have lunch.",
            "startTime": "12:00",
            "endTime": "13:00",
            "priortiy": "<img src=\"./images/silver-medal.png\"> Low"
        },
        {
            "title": "Go for a Walk",
            "priority": "Medium",
            "status": "inactive",
            "details": "Go for a 20-minute walk.",
            "startTime": "16:00",
            "endTime": "16:20",
            "priortiy": "<img src=\"./images/coin.png\"> Medium"
        }
    ],
    "13-January-2025": [
        {
            "title": "Morning Exercise",
            "priority": "Medium",
            "status": "active",
            "details": "Do 20 minutes of stretching exercises.",
            "startTime": "06:00",
            "endTime": "06:20",
            "priortiy": "<img src=\"./images/jewelry.png\"> High"
        },
        {
            "title": "Work on DSA",
            "priority": "High",
            "status": "active",
            "details": "Study DSA concepts for 2 hours.",
            "startTime": "09:00",
            "endTime": "11:00",
            "priortiy": "<img src=\"./images/fire.png\"> Highest"
        },
        {
            "title": "Lunch Break",
            "priority": "Low",
            "status": "inactive",
            "details": "Relax and take a lunch break.",
            "startTime": "12:00",
            "endTime": "13:00",
            "priortiy": "<img src=\"./images/silver-medal.png\"> Low"
        },
        {
            "title": "Go for a Walk",
            "priority": "Medium",
            "status": "inactive",
            "details": "Walk for 30 minutes.",
            "startTime": "16:00",
            "endTime": "16:30",
            "priortiy": "<img src=\"./images/coin.png\"> Medium"
        }
    ],
    "14-January-2025": [
        {
            "title": "Wake up early",
            "priority": "High",
            "status": "active",
            "details": "Wake up at 6:00 AM and start the day.",
            "startTime": "06:00",
            "endTime": "06:30",
            "priortiy": "<img src=\"./images/fire.png\"> Highest"
        },
        {
            "title": "Project Work",
            "priority": "Priority",
            "status": "active",
            "details": "Work on the ongoing project for 3 hours.",
            "startTime": "09:00",
            "endTime": "12:00",
            "priortiy": "<img src=\"./images/jewelry.png\"> High"
        },
        {
            "title": "Lunch Break",
            "priority": "Low",
            "status": "inactive",
            "details": "Take a break and have lunch.",
            "startTime": "12:30",
            "endTime": "13:30",
            "priortiy": "<img src=\"./images/silver-medal.png\"> Low"
        },
        {
            "title": "Go for a Jog",
            "priority": "Medium",
            "status": "inactive",
            "details": "Jog for 30 minutes around the park.",
            "startTime": "16:00",
            "endTime": "16:30",
            "priortiy": "<img src=\"./images/coin.png\"> Medium"
        }
    ],

    "15-January-2025": [
        {
            "title": "Morning Meditation",
            "priority": "High",
            "status": "active",
            "details": "Meditate for 20 minutes to start your day.",
            "startTime": "06:00",
            "endTime": "06:20",
            "priortiy": "<img src=\"./images/fire.png\"> Highest"
        },
        {
            "title": "Coding Practice",
            "priority": "Priority",
            "status": "active",
            "details": "Complete coding exercises for 2 hours.",
            "startTime": "09:00",
            "endTime": "11:00",
            "priortiy": "<img src=\"./images/jewelry.png\"> High"
        },
        {
            "title": "Lunch Break",
            "priority": "Low",
            "status": "inactive",
            "details": "Take a break and have lunch.",
            "startTime": "12:00",
            "endTime": "13:00",
            "priortiy": "<img src=\"./images/silver-medal.png\"> Low"
        },
        {
            "title": "Exercise",
            "priority": "Medium",
            "status": "active",
            "details": "Do a 20-minute workout session.",
            "startTime": "17:00",
            "endTime": "17:20",
            "priortiy": "<img src=\"./images/coin.png\"> Medium"
        }
    ],
    "16-January-2025": [
        {
            "title": "Wake up early",
            "priority": "High",
            "status": "active",
            "details": "Wake up at 6:00 AM to start the day.",
            "startTime": "06:00",
            "endTime": "06:30",
            "priortiy": "<img src=\"./images/fire.png\"> Highest"
        },
        {
            "title": "Study Session",
            "priority": "Priority",
            "status": "active",
            "details": "Study for 2 hours on the subject of DSA.",
            "startTime": "09:00",
            "endTime": "11:00",
            "priortiy": "<img src=\"./images/jewelry.png\"> High"
        },
        {
            "title": "Lunch Break",
            "priority": "Low",
            "status": "inactive",
            "details": "Take a break for lunch.",
            "startTime": "12:00",
            "endTime": "13:00",
            "priortiy": "<img src=\"./images/silver-medal.png\"> Low"
        },
        {
            "title": "Go for a Walk",
            "priority": "Medium",
            "status": "inactive",
            "details": "Take a 30-minute walk.",
            "startTime": "16:00",
            "endTime": "16:30",
            "priortiy": "<img src=\"./images/coin.png\"> Medium"
        }
    ],
    "17-January-2025": [
        {
            "title": "Wake up early",
            "priority": "High",
            "status": "active",
            "details": "Wake up at 6:00 AM and start your day.",
            "startTime": "06:00",
            "endTime": "06:30",
            "priortiy": "<img src=\"./images/fire.png\"> Highest"
        },
        {
            "title": "Complete Homework",
            "priority": "Priority",
            "status": "active",
            "details": "Complete homework assignments for 2 hours.",
            "startTime": "09:00",
            "endTime": "11:00",
            "priortiy": "<img src=\"./images/jewelry.png\"> High"
        },
        {
            "title": "Lunch Break",
            "priority": "Low",
            "status": "inactive",
            "details": "Relax and have lunch.",
            "startTime": "12:00",
            "endTime": "13:00",
            "priortiy": "<img src=\"./images/silver-medal.png\"> Low"
        },
        {
            "title": "Read a Book",
            "priority": "Medium",
            "status": "active",
            "details": "Read for 30 minutes from your book.",
            "startTime": "16:00",
            "endTime": "16:30",
            "priortiy": "<img src=\"./images/coin.png\"> Medium"
        }
    ],


    "18-January-2025": [
        {
            "title": "Wake up early",
            "priority": "High",
            "status": "active",
            "details": "Wake up at 6:00 AM and start your day to be productive.",
            "startTime": "06:00",
            "endTime": "06:30",
            "priortiy": "<img src=\"./images/fire.png\"> Highest"
        },
        {
            "title": "Project Work",
            "priority": "Priority",
            "status": "active",
            "details": "Work on the project for 3 hours, focusing on important tasks.",
            "startTime": "09:00",
            "endTime": "12:00",
            "priortiy": "<img src=\"./images/jewelry.png\"> High"
        },
        {
            "title": "Lunch Break",
            "priority": "Low",
            "status": "inactive",
            "details": "Take a lunch break and relax for a while.",
            "startTime": "12:30",
            "endTime": "13:30",
            "priortiy": "<img src=\"./images/silver-medal.png\"> Low"
        },
        {
            "title": "Exercise",
            "priority": "Medium",
            "status": "inactive",
            "details": "Do a 20-minute workout session for physical health.",
            "startTime": "17:00",
            "endTime": "17:20",
            "priortiy": "<img src=\"./images/coin.png\"> Medium"
        }
    ],
    "19-January-2025": [
        {
            "title": "Meditate",
            "priority": "<img src=\"./images/fire.png\"> Highest",
            "status": "active",
            "details": "Meditate for 15 minutes in the morning to calm your mind.",
            "startTime": "06:30",
            "endTime": "06:45",
            "priortiy": "<img src=\"./images/fire.png\"> Highest"
        },
        {
            "title": "Work on Project",
            "priority": "High",
            "status": "active",
            "details": "Complete the first section of the project with full focus.",
            "startTime": "09:00",
            "endTime": "12:00",
            "priortiy": "<img src=\"./images/jewelry.png\"> High"
        },
        {
            "title": "Lunch Break",
            "priority": "Low",
            "status": "inactive",
            "details": "Take a break for lunch and refresh yourself.",
            "startTime": "13:00",
            "endTime": "14:00",
            "priortiy": "<img src=\"./images/silver-medal.png\"> Low"
        },
        {
            "title": "Evening Walk",
            "priority": "Priority",
            "status": "inactive",
            "details": "Go for a walk in the park to get some fresh air.",
            "startTime": "18:00",
            "endTime": "18:30",
            "priortiy": "<img src=\"./images/coin.png\"> Medium"
        }
    ],
    "20-January-2025": [
        {
            "title": "Read a Book",
            "priority": "Medium",
            "status": "active",
            "details": "Read 15 pages of 'The Alchemist' to enhance your knowledge.",
            "startTime": "07:00",
            "endTime": "07:30",
            "priortiy": "<img src=\"./images/jewelry.png\"> High"
        },
        {
            "title": "Complete Homework",
            "priority": "<img src=\"./images/fire.png\"> Highest",
            "status": "active",
            "details": "Finish the remaining homework assignments and review.",
            "startTime": "10:00",
            "endTime": "12:00",
            "priortiy": "<img src=\"./images/fire.png\"> Highest"
        },
        {
            "title": "Exercise",
            "priority": "High",
            "status": "inactive",
            "details": "Do 30 minutes of cardio for fitness.",
            "startTime": "16:00",
            "endTime": "16:30",
            "priortiy": "<img src=\"./images/coin.png\"> Medium"
        },
        {
            "title": "Work on Presentation",
            "priority": "Priority",
            "status": "active",
            "details": "Work on the upcoming presentation slides for an important meeting.",
            "startTime": "19:00",
            "endTime": "21:00",
            "priortiy": "<img src=\"./images/silver-medal.png\"> Low"
        }
    ],
    "21-January-2025": [
        {
            "title": "Wake up early",
            "priority": "Priority",
            "status": "active",
            "details": "Wake up at 5:30 AM to make the most of the day.",
            "startTime": "05:30",
            "endTime": "06:00",
            "priortiy": "<img src=\"./images/fire.png\"> Highest"
        },
        {
            "title": "Yoga",
            "priority": "High",
            "status": "inactive",
            "details": "Practice 20 minutes of yoga to relax your body.",
            "startTime": "06:30",
            "endTime": "06:50",
            "priortiy": "<img src=\"./images/jewelry.png\"> High"
        },
        {
            "title": "Meeting",
            "priority": "High",
            "status": "inactive",
            "details": "Attend the team meeting to discuss progress and next steps.",
            "startTime": "10:00",
            "endTime": "11:00",
            "priortiy": "<img src=\"./images/coin.png\"> Medium"
        },
        {
            "title": "Grocery Shopping",
            "priority": "Medium",
            "status": "active",
            "details": "Go to the market to buy groceries and essentials.",
            "startTime": "15:00",
            "endTime": "16:00",
            "priortiy": "<img src=\"./images/silver-medal.png\"> Low"
        },
        {
            "title": "Evening Walk",
            "priority": "Priority",
            "status": "inactive",
            "details": "Take a 30-minute walk to stay active and refreshed.",
            "startTime": "17:30",
            "endTime": "18:00",
            "priortiy": "<img src=\"./images/jewelry.png\"> High"
        }
    ],
    "22-January-2025": [
        {
            "title": "Write a Blog",
            "priority": "High",
            "status": "active",
            "details": "Write a 500-word blog post on productivity and time management.",
            "startTime": "08:00",
            "endTime": "09:30",
            "priortiy": "<img src=\"./images/fire.png\"> Highest"
        },
        {
            "title": "Code Practice",
            "priority": "Medium",
            "status": "active",
            "details": "Complete 1 hour of coding exercises to improve your skills.",
            "startTime": "10:00",
            "endTime": "11:00",
            "priortiy": "<img src=\"./images/coin.png\"> Medium"
        },
        {
            "title": "Lunch Break",
            "priority": "Low",
            "status": "inactive",
            "details": "Take a break for lunch and relax.",
            "startTime": "12:30",
            "endTime": "13:30",
            "priortiy": "<img src=\"./images/silver-medal.png\"> Low"
        },
        {
            "title": "Study",
            "priority": "High",
            "status": "active",
            "details": "Study for upcoming exams for the next 2 hours.",
            "startTime": "14:00",
            "endTime": "16:00",
            "priortiy": "<img src=\"./images/jewelry.png\"> High"
        }
    ],
    "23-January-2025": [
        {
            "title": "Wake up early",
            "priority": "Priority",
            "status": "active",
            "details": "Start the day at 6:00 AM with a fresh routine.",
            "startTime": "06:00",
            "endTime": "06:30",
            "priortiy": "<img src=\"./images/fire.png\"> Highest"
        },
        {
            "title": "Meeting",
            "priority": "High",
            "status": "inactive",
            "details": "Attend client meeting at 10:00 AM to discuss project progress.",
            "startTime": "10:00",
            "endTime": "11:00",
            "priortiy": "<img src=\"./images/coin.png\"> Medium"
        },
        {
            "title": "Work on Project",
            "priority": "High",
            "status": "active",
            "details": "Work on the current project deadline with focus and concentration.",
            "startTime": "13:00",
            "endTime": "15:00",
            "priortiy": "<img src=\"./images/jewelry.png\"> High"
        },
        {
            "title": "Exercise",
            "priority": "Low",
            "status": "inactive",
            "details": "Do 30 minutes of strength training to stay fit.",
            "startTime": "17:00",
            "endTime": "17:30",
            "priortiy": "<img src=\"./images/silver-medal.png\"> Low"
        }
    ],
    "24-January-2025": [
        {
            "title": "Morning Meditation",
            "priority": "High",
            "status": "active",
            "details": "Meditate for 20 minutes to start the day.",
            "startTime": "06:00",
            "endTime": "06:20",
            "priortiy": "<img src=\"./images/fire.png\"> Highest"
        },
        {
            "title": "Complete Coding Practice",
            "priority": "Priority",
            "status": "active",
            "details": "Complete the remaining coding exercises.",
            "startTime": "09:00",
            "endTime": "11:00",
            "priortiy": "<img src=\"./images/jewelry.png\"> High"
        },
        {
            "title": "Lunch Break",
            "priority": "Low",
            "status": "inactive",
            "details": "Take a break for lunch.",
            "startTime": "13:00",
            "endTime": "14:00",
            "priortiy": "<img src=\"./images/silver-medal.png\"> Low"
        },
        {
            "title": "Read Book",
            "priority": "Medium",
            "status": "active",
            "details": "Read 20 pages of 'The Power of Habit'.",
            "startTime": "15:00",
            "endTime": "15:30",
            "priortiy": "<img src=\"./images/coin.png\"> Medium"
        },
        {
            "title": "Exercise",
            "priority": "Medium",
            "status": "active",
            "details": "Do 20 minutes of stretching exercises.",
            "startTime": "17:30",
            "endTime": "17:50",
            "priortiy": "<img src=\"./images/jewelry.png\"> High"
        }
    ],
    "25-January-2025": [
        {
            "title": "Wake up early",
            "priority": "High",
            "status": "active",
            "details": "Wake up at 6:00 AM for the day.",
            "startTime": "06:00",
            "endTime": "06:30",
            "priortiy": "<img src=\"./images/fire.png\"> Highest"
        },
        {
            "title": "Work on Report",
            "priority": "Priority",
            "status": "active",
            "details": "Complete the project report.",
            "startTime": "09:00",
            "endTime": "12:00",
            "priortiy": "<img src=\"./images/jewelry.png\"> High"
        },
        {
            "title": "Grocery Shopping",
            "priority": "Medium",
            "status": "inactive",
            "details": "Buy groceries for the week.",
            "startTime": "14:00",
            "endTime": "15:00",
            "priortiy": "<img src=\"./images/coin.png\"> Medium"
        },
        {
            "title": "Meeting with Client",
            "priority": "High",
            "status": "active",
            "details": "Attend the scheduled meeting with the client.",
            "startTime": "16:00",
            "endTime": "17:00",
            "priortiy": "<img src=\"./images/fire.png\"> Highest"
        }
    ],
    "26-January-2025": [
        {
            "title": "Yoga Practice",
            "priority": "Medium",
            "status": "active",
            "details": "Practice 30 minutes of yoga.",
            "startTime": "07:00",
            "endTime": "07:30",
            "priortiy": "<img src=\"./images/jewelry.png\"> High"
        },
        {
            "title": "Complete Homework",
            "priority": "<img src=\"./images/fire.png\"> Highest",
            "status": "active",
            "details": "Finish all homework assignments.",
            "startTime": "10:00",
            "endTime": "12:00",
            "priortiy": "<img src=\"./images/fire.png\"> Highest"
        },
        {
            "title": "Guitar Practice",
            "priority": "Low",
            "status": "inactive",
            "details": "Practice guitar for 30 minutes.",
            "startTime": "14:00",
            "endTime": "14:30",
            "priortiy": "<img src=\"./images/silver-medal.png\"> Low"
        },
        {
            "title": "Relaxation Time",
            "priority": "Low",
            "status": "inactive",
            "details": "Relax and take a break.",
            "startTime": "16:00",
            "endTime": "17:00",
            "priortiy": "<img src=\"./images/silver-medal.png\"> Low"
        },
        {
            "title": "Evening Jog",
            "priority": "Priority",
            "status": "active",
            "details": "Go for a 20-minute jog.",
            "startTime": "18:00",
            "endTime": "18:20",
            "priortiy": "<img src=\"./images/fire.png\"> Highest"
        }
    ],
    "27-January-2025": [
        {
            "title": "Wake up early",
            "priority": "Priority",
            "status": "active",
            "details": "Start the day by waking up at 5:30 AM.",
            "startTime": "05:30",
            "endTime": "06:00",
            "priortiy": "<img src=\"./images/fire.png\"> Highest"
        },
        {
            "title": "Work on Coding",
            "priority": "Medium",
            "status": "active",
            "details": "Complete 1 hour of coding practice.",
            "startTime": "09:00",
            "endTime": "10:00",
            "priortiy": "<img src=\"./images/jewelry.png\"> High"
        },
        {
            "title": "Lunch Break",
            "priority": "Low",
            "status": "inactive",
            "details": "Take a break for lunch.",
            "startTime": "12:00",
            "endTime": "13:00",
            "priortiy": "<img src=\"./images/silver-medal.png\"> Low"
        },
        {
            "title": "Work on Presentation",
            "priority": "High",
            "status": "active",
            "details": "Prepare the slides for the presentation.",
            "startTime": "15:00",
            "endTime": "17:00",
            "priortiy": "<img src=\"./images/coin.png\"> Medium"
        },
        {
            "title": "Evening Walk",
            "priority": "Priority",
            "status": "inactive",
            "details": "Take a short walk in the evening.",
            "startTime": "18:30",
            "endTime": "19:00",
            "priortiy": "<img src=\"./images/silver-medal.png\"> Low"
        }
    ],
    "28-January-2025": [
        {
            "title": "Morning Meditation",
            "priority": "High",
            "status": "active",
            "details": "Meditate for 20 minutes.",
            "startTime": "06:00",
            "endTime": "06:20",
            "priortiy": "<img src=\"./images/fire.png\"> Highest"
        },
        {
            "title": "Complete Research",
            "priority": "Priority",
            "status": "active",
            "details": "Finish the required research for the project.",
            "startTime": "09:00",
            "endTime": "12:00",
            "priortiy": "<img src=\"./images/jewelry.png\"> High"
        },
        {
            "title": "Lunch Break",
            "priority": "Low",
            "status": "inactive",
            "details": "Take a lunch break.",
            "startTime": "12:30",
            "endTime": "13:30",
            "priortiy": "<img src=\"./images/silver-medal.png\"> Low"
        },
        {
            "title": "Practice Presentation",
            "priority": "Medium",
            "status": "active",
            "details": "Practice the presentation for the meeting.",
            "startTime": "14:00",
            "endTime": "16:00",
            "priortiy": "<img src=\"./images/coin.png\"> Medium"
        }
    ],
    "29-January-2025": [
        {
            "title": "Wake up early",
            "priority": "Priority",
            "status": "active",
            "details": "Wake up at 6:00 AM to start the day.",
            "startTime": "06:00",
            "endTime": "06:30",
            "priortiy": "<img src=\"./images/fire.png\"> Highest"
        },
        {
            "title": "Work on Project",
            "priority": "High",
            "status": "active",
            "details": "Work on project deliverables.",
            "startTime": "09:00",
            "endTime": "12:00",
            "priortiy": "<img src=\"./images/jewelry.png\"> High"
        },
        {
            "title": "Lunch Break",
            "priority": "Low",
            "status": "inactive",
            "details": "Take a break for lunch.",
            "startTime": "13:00",
            "endTime": "14:00",
            "priortiy": "<img src=\"./images/silver-medal.png\"> Low"
        },
        {
            "title": "Evening Walk",
            "priority": "Medium",
            "status": "inactive",
            "details": "Walk in the evening for 30 minutes.",
            "startTime": "17:00",
            "endTime": "17:30",
            "priortiy": "<img src=\"./images/coin.png\"> Medium"
        }
    ],
    "30-January-2025": [
        {
            "title": "Yoga Practice",
            "priority": "High",
            "status": "active",
            "details": "Practice yoga for 30 minutes.",
            "startTime": "07:00",
            "endTime": "07:30",
            "priortiy": "<img src=\"./images/fire.png\"> Highest"
        },
        {
            "title": "Study Session",
            "priority": "Priority",
            "status": "active",
            "details": "Study for upcoming exams.",
            "startTime": "10:00",
            "endTime": "12:00",
            "priortiy": "<img src=\"./images/jewelry.png\"> High"
        },
        {
            "title": "Lunch Break",
            "priority": "Low",
            "status": "inactive",
            "details": "Lunch break.",
            "startTime": "13:00",
            "endTime": "14:00",
            "priortiy": "<img src=\"./images/silver-medal.png\"> Low"
        },
        {
            "title": "Work on Presentation",
            "priority": "Medium",
            "status": "inactive",
            "details": "Prepare slides for upcoming presentation.",
            "startTime": "15:00",
            "endTime": "16:00",
            "priortiy": "<img src=\"./images/coin.png\"> Medium"
        }
    ]
};



daysMindMap = {
    "19-January-2025": [
        {
            "name": "24-January-2025-file-1",
            "date": "19-January-2025",
            "node": [
                {
                    "x": 637.7904041608175,
                    "y": 301.59091101752387,
                    "label": "ES6 Features Introduction",
                    "shape": "rectangle",
                    "width": 220,
                    "height": 70,
                    "isActive": false,
                    "fontsize": 16,
                    "description": "Learn about modern JavaScript features introduced in ES6.",
                    "fontcolor": "black",
                    "backgroundcolor": "#ffa600"
                },
                {
                    "x": 946.6792930497063,
                    "y": 201.59091101752387,
                    "label": "Destructuring",
                    "shape": "rectangle",
                    "width": 180,
                    "height": 50,
                    "isActive": false,
                    "fontsize": 16,
                    "description": "Learn how to destructure arrays and objects in JavaScript.",
                    "fontcolor": "black",
                    "backgroundcolor": "#faca00"
                },
                {
                    "x": 944.4570708274841,
                    "y": 298.25757768419055,
                    "label": "Template Literals",
                    "shape": "rectangle",
                    "width": 180,
                    "height": 50,
                    "isActive": false,
                    "fontsize": 16,
                    "description": "Explore template literals for more readable string interpolation.",
                    "fontcolor": "black",
                    "backgroundcolor": "#faca00"
                },
                {
                    "x": 943.345959716373,
                    "y": 399.36868879530164,
                    "label": "Spread Operator",
                    "shape": "rectangle",
                    "width": 180,
                    "height": 50,
                    "isActive": false,
                    "fontsize": 16,
                    "description": "Learn how to use the spread operator to expand or copy objects and arrays.",
                    "fontcolor": "black",
                    "backgroundcolor": "#faca00"
                },
                {
                    "x": 821.1237374941508,
                    "y": 493.8131332397461,
                    "label": "Default Parameters",
                    "shape": "rectangle",
                    "width": 180,
                    "height": 50,
                    "isActive": false,
                    "fontsize": 16,
                    "description": "Learn how to set default parameter values for functions.",
                    "fontcolor": "black",
                    "backgroundcolor": "#faca00"
                }
            ],
            "connection": [
                {
                    "start": {
                        "x": 637.7904041608175,
                        "y": 301.59091101752387
                    },
                    "end": {
                        "x": 946.6792930497063,
                        "y": 201.59091101752387
                    }
                },
                {
                    "start": {
                        "x": 637.7904041608175,
                        "y": 301.59091101752387
                    },
                    "end": {
                        "x": 944.4570708274841,
                        "y": 298.25757768419055
                    }
                },
                {
                    "start": {
                        "x": 637.7904041608175,
                        "y": 301.59091101752387
                    },
                    "end": {
                        "x": 943.345959716373,
                        "y": 399.36868879530164
                    }
                },
                {
                    "start": {
                        "x": 637.7904041608175,
                        "y": 301.59091101752387
                    },
                    "end": {
                        "x": 821.1237374941508,
                        "y": 493.8131332397461
                    }
                }
            ]
        },
        {
            "name": "23-January-2025-file-2",
            "date": "19-January-2025",
            "node": [
                {
                    "x": 637.7904041608175,
                    "y": 301.59091101752387,
                    "label": "Advanced Functions and Closures",
                    "shape": "rectangle",
                    "width": 279,
                    "height": 70,
                    "isActive": false,
                    "fontsize": 16,
                    "description": "Explore advanced JavaScript concepts like closures, callbacks, and higher-order functions.",
                    "fontcolor": "black",
                    "backgroundcolor": "#ffa600"
                },
                {
                    "x": 946.6792930497063,
                    "y": 201.59091101752387,
                    "label": "Closures",
                    "shape": "rectangle",
                    "width": 180,
                    "height": 50,
                    "isActive": false,
                    "fontsize": 16,
                    "description": "Learn about closures in JavaScript, and how they capture and remember the environment.",
                    "fontcolor": "black",
                    "backgroundcolor": "#faca00"
                },
                {
                    "x": 944.4570708274841,
                    "y": 298.25757768419055,
                    "label": "Callbacks",
                    "shape": "rectangle",
                    "width": 180,
                    "height": 50,
                    "isActive": false,
                    "fontsize": 16,
                    "description": "Understand how callbacks are used to handle asynchronous operations.",
                    "fontcolor": "black",
                    "backgroundcolor": "#faca00"
                },
                {
                    "x": 943.345959716373,
                    "y": 399.36868879530164,
                    "label": "Higher-order Functions",
                    "shape": "rectangle",
                    "width": 180,
                    "height": 50,
                    "isActive": false,
                    "fontsize": 16,
                    "description": "Learn how higher-order functions allow you to pass functions as arguments.",
                    "fontcolor": "black",
                    "backgroundcolor": "#faca00"
                },
                {
                    "x": 821.1237374941508,
                    "y": 493.8131332397461,
                    "label": "Function Scope vs Block Scope",
                    "shape": "rectangle",
                    "width": 267,
                    "height": 50,
                    "isActive": false,
                    "fontsize": 16,
                    "description": "Understand the difference between function scope and block scope in JavaScript.",
                    "fontcolor": "black",
                    "backgroundcolor": "#faca00"
                }
            ],
            "connection": [
                {
                    "start": {
                        "x": 637.7904041608175,
                        "y": 301.59091101752387
                    },
                    "end": {
                        "x": 946.6792930497063,
                        "y": 201.59091101752387
                    }
                },
                {
                    "start": {
                        "x": 637.7904041608175,
                        "y": 301.59091101752387
                    },
                    "end": {
                        "x": 944.4570708274841,
                        "y": 298.25757768419055
                    }
                },
                {
                    "start": {
                        "x": 637.7904041608175,
                        "y": 301.59091101752387
                    },
                    "end": {
                        "x": 943.345959716373,
                        "y": 399.36868879530164
                    }
                },
                {
                    "start": {
                        "x": 637.7904041608175,
                        "y": 301.59091101752387
                    },
                    "end": {
                        "x": 821.1237374941508,
                        "y": 493.8131332397461
                    }
                }
            ]
        }
    ],
    "20-January-2025": [
        {
            "name": "20-January-2025-file-1",
            "date": "20-January-2025",
            "node": [
                {
                    "x": 637.7904041608175,
                    "y": 301.59091101752387,
                    "label": "Control Flow Introduction",
                    "shape": "rectangle",
                    "width": 220,
                    "height": 70,
                    "isActive": false,
                    "fontsize": 16,
                    "description": "Learn about the importance of control flow in programming and how it influences the flow of execution.",
                    "fontcolor": "black",
                    "backgroundcolor": "#ffa600"
                },
                {
                    "x": 475.5681819385952,
                    "y": 126.03535546196831,
                    "label": "Conditional Statements",
                    "shape": "rectangle",
                    "width": 180,
                    "height": 50,
                    "isActive": false,
                    "fontsize": 16,
                    "description": "Learn how to use if, else, and else if statements to make decisions in code.",
                    "fontcolor": "black",
                    "backgroundcolor": "#faca00"
                },
                {
                    "x": 855.5681819385952,
                    "y": 146.03535546196832,
                    "label": "Switch Case",
                    "shape": "rectangle",
                    "width": 180,
                    "height": 50,
                    "isActive": false,
                    "fontsize": 16,
                    "description": "Explore how switch case statements provide a more readable way to handle multiple conditions.",
                    "fontcolor": "black",
                    "backgroundcolor": "#faca00"
                },
                {
                    "x": 933.345959716373,
                    "y": 304.9242443508572,
                    "label": "For Loop",
                    "shape": "rectangle",
                    "width": 180,
                    "height": 50,
                    "isActive": false,
                    "fontsize": 16,
                    "description": "Learn how to use the for loop to iterate through code a specific number of times.",
                    "fontcolor": "black",
                    "backgroundcolor": "#faca00"
                },
                {
                    "x": 782.2348486052618,
                    "y": 489.36868879530164,
                    "label": "While Loop",
                    "shape": "rectangle",
                    "width": 180,
                    "height": 50,
                    "isActive": false,
                    "fontsize": 16,
                    "description": "Understand how to use the while loop to repeat actions as long as a condition is true.",
                    "fontcolor": "black",
                    "backgroundcolor": "#faca00"
                },
                {
                    "x": 424.45707082748413,
                    "y": 493.8131332397461,
                    "label": "Do-While Loop",
                    "shape": "rectangle",
                    "width": 180,
                    "height": 50,
                    "isActive": false,
                    "fontsize": 16,
                    "description": "Learn how the do-while loop ensures that the code inside the loop runs at least once before checking the condition.",
                    "fontcolor": "black",
                    "backgroundcolor": "#faca00"
                }
            ],
            "connection": [
                {
                    "start": {
                        "x": 637.7904041608175,
                        "y": 301.59091101752387
                    },
                    "end": {
                        "x": 475.5681819385952,
                        "y": 126.03535546196831
                    }
                },
                {
                    "start": {
                        "x": 637.7904041608175,
                        "y": 301.59091101752387
                    },
                    "end": {
                        "x": 855.5681819385952,
                        "y": 146.03535546196832
                    }
                },
                {
                    "start": {
                        "x": 637.7904041608175,
                        "y": 301.59091101752387
                    },
                    "end": {
                        "x": 933.345959716373,
                        "y": 304.9242443508572
                    }
                },
                {
                    "start": {
                        "x": 637.7904041608175,
                        "y": 301.59091101752387
                    },
                    "end": {
                        "x": 782.2348486052618,
                        "y": 489.36868879530164
                    }
                },
                {
                    "start": {
                        "x": 637.7904041608175,
                        "y": 301.59091101752387
                    },
                    "end": {
                        "x": 424.45707082748413,
                        "y": 493.8131332397461
                    }
                }
            ]
        }
    ],
    "21-January-2025": [
        {
            "name": "21-January-2025-file-1",
            "date": "21-January-2025",
            "node": [
                {
                    "x": 637.7904041608175,
                    "y": 301.59091101752387,
                    "label": "Functions Introduction",
                    "shape": "rectangle",
                    "width": 220,
                    "height": 70,
                    "isActive": false,
                    "fontsize": 16,
                    "description": "Learn the basics of functions in JavaScript, including definition and usage.",
                    "fontcolor": "black",
                    "backgroundcolor": "#ffa600"
                },
                {
                    "x": 420.0126263830397,
                    "y": 138.25757768419052,
                    "label": "Defining Functions",
                    "shape": "rectangle",
                    "width": 180,
                    "height": 50,
                    "isActive": false,
                    "fontsize": 16,
                    "description": "Learn how to define functions using the function keyword.",
                    "fontcolor": "black",
                    "backgroundcolor": "#faca00"
                },
                {
                    "x": 845.5681819385952,
                    "y": 154.9242443508572,
                    "label": "Function Parameters and Return Values",
                    "shape": "rectangle",
                    "width": 324,
                    "height": 50,
                    "isActive": false,
                    "fontsize": 16,
                    "description": "Understand function parameters and how to return values from functions.",
                    "fontcolor": "black",
                    "backgroundcolor": "#faca00"
                },
                {
                    "x": 802.2348486052618,
                    "y": 459.36868879530164,
                    "label": "Arrow Functions",
                    "shape": "rectangle",
                    "width": 180,
                    "height": 50,
                    "isActive": false,
                    "fontsize": 16,
                    "description": "Learn how to use arrow functions for shorter function syntax.",
                    "fontcolor": "black",
                    "backgroundcolor": "#faca00"
                },
                {
                    "x": 416.67929304970636,
                    "y": 464.9242443508572,
                    "label": "Function Expressions vs Declarations",
                    "shape": "rectangle",
                    "width": 324,
                    "height": 50,
                    "isActive": false,
                    "fontsize": 16,
                    "description": "Learn the difference between function expressions and declarations.",
                    "fontcolor": "black",
                    "backgroundcolor": "#faca00"
                }
            ],
            "connection": [
                {
                    "start": {
                        "x": 637.7904041608175,
                        "y": 301.59091101752387
                    },
                    "end": {
                        "x": 420.0126263830397,
                        "y": 138.25757768419052
                    }
                },
                {
                    "start": {
                        "x": 637.7904041608175,
                        "y": 301.59091101752387
                    },
                    "end": {
                        "x": 845.5681819385952,
                        "y": 154.9242443508572
                    }
                },
                {
                    "start": {
                        "x": 637.7904041608175,
                        "y": 301.59091101752387
                    },
                    "end": {
                        "x": 802.2348486052618,
                        "y": 459.36868879530164
                    }
                },
                {
                    "start": {
                        "x": 637.7904041608175,
                        "y": 301.59091101752387
                    },
                    "end": {
                        "x": 416.67929304970636,
                        "y": 464.9242443508572
                    }
                }
            ]
        },
        {
            "name": "21-January-2025-file-2",
            "date": "21-January-2025",
            "node": [
                {
                    "x": 637.7904041608175,
                    "y": 301.59091101752387,
                    "label": "Arrays Introduction",
                    "shape": "rectangle",
                    "width": 220,
                    "height": 70,
                    "isActive": false,
                    "fontsize": 16,
                    "description": "Learn the basics of arrays, including definition and usage in JavaScript.",
                    "fontcolor": "black",
                    "backgroundcolor": "#ffa600"
                },
                {
                    "x": 445.5681819385952,
                    "y": 161.59091101752387,
                    "label": "Defining Arrays",
                    "shape": "rectangle",
                    "width": 180,
                    "height": 50,
                    "isActive": false,
                    "fontsize": 16,
                    "description": "Learn how to define arrays in JavaScript.",
                    "fontcolor": "black",
                    "backgroundcolor": "#faca00"
                },
                {
                    "x": 788.9015152719286,
                    "y": 164.9242443508572,
                    "label": "Accessing and Modifying Elements",
                    "shape": "rectangle",
                    "width": 273,
                    "height": 50,
                    "isActive": false,
                    "fontsize": 16,
                    "description": "Learn how to access and modify elements in an array.",
                    "fontcolor": "black",
                    "backgroundcolor": "#faca00"
                },
                {
                    "x": 797.7904041608174,
                    "y": 443.8131332397461,
                    "label": "Array Methods",
                    "shape": "rectangle",
                    "width": 180,
                    "height": 50,
                    "isActive": false,
                    "fontsize": 16,
                    "description": "Explore array methods like push, pop, shift, unshift, slice, splice, and forEach.",
                    "fontcolor": "black",
                    "backgroundcolor": "#faca00"
                },
                {
                    "x": 426.67929304970636,
                    "y": 448.25757768419055,
                    "label": "Iterating over Arrays",
                    "shape": "rectangle",
                    "width": 180,
                    "height": 50,
                    "isActive": false,
                    "fontsize": 16,
                    "description": "Learn how to iterate over arrays using loops like for and forEach.",
                    "fontcolor": "black",
                    "backgroundcolor": "#faca00"
                }
            ],
            "connection": [
                {
                    "start": {
                        "x": 637.7904041608175,
                        "y": 301.59091101752387
                    },
                    "end": {
                        "x": 445.5681819385952,
                        "y": 161.59091101752387
                    }
                },
                {
                    "start": {
                        "x": 637.7904041608175,
                        "y": 301.59091101752387
                    },
                    "end": {
                        "x": 788.9015152719286,
                        "y": 164.9242443508572
                    }
                },
                {
                    "start": {
                        "x": 637.7904041608175,
                        "y": 301.59091101752387
                    },
                    "end": {
                        "x": 797.7904041608174,
                        "y": 443.8131332397461
                    }
                },
                {
                    "start": {
                        "x": 637.7904041608175,
                        "y": 301.59091101752387
                    },
                    "end": {
                        "x": 426.67929304970636,
                        "y": 448.25757768419055
                    }
                }
            ]
        }
    ],
    "22-January-2025": [
        {
            "name": "22-January-2025-file-1",
            "date": "22-January-2025",
            "node": [
                {
                    "x": 637.7904041608175,
                    "y": 301.59091101752387,
                    "label": "Objects Introduction",
                    "shape": "rectangle",
                    "width": 220,
                    "height": 70,
                    "isActive": false,
                    "fontsize": 16,
                    "description": "Learn the basics of objects, including definition and usage in JavaScript.",
                    "fontcolor": "black",
                    "backgroundcolor": "#ffa600"
                },
                {
                    "x": 416.67929304970636,
                    "y": 144.9242443508572,
                    "label": "Defining Objects",
                    "shape": "rectangle",
                    "width": 180,
                    "height": 50,
                    "isActive": false,
                    "fontsize": 16,
                    "description": "Learn how to define objects and use them in JavaScript.",
                    "fontcolor": "black",
                    "backgroundcolor": "#faca00"
                },
                {
                    "x": 781.1237374941508,
                    "y": 129.36868879530164,
                    "label": "Accessing Object Properties",
                    "shape": "rectangle",
                    "width": 270,
                    "height": 50,
                    "isActive": false,
                    "fontsize": 16,
                    "description": "Learn how to access properties and methods of an object.",
                    "fontcolor": "black",
                    "backgroundcolor": "#faca00"
                },
                {
                    "x": 815.5681819385952,
                    "y": 436.0353554619683,
                    "label": "Object Methods and 'this'",
                    "shape": "rectangle",
                    "width": 218,
                    "height": 50,
                    "isActive": false,
                    "fontsize": 16,
                    "description": "Understand how to define and use methods inside objects, and the 'this' keyword.",
                    "fontcolor": "black",
                    "backgroundcolor": "#faca00"
                },
                {
                    "x": 443.345959716373,
                    "y": 442.70202212863495,
                    "label": "Iterating over Objects",
                    "shape": "rectangle",
                    "width": 180,
                    "height": 50,
                    "isActive": false,
                    "fontsize": 16,
                    "description": "Learn how to iterate over object properties using different methods.",
                    "fontcolor": "black",
                    "backgroundcolor": "#faca00"
                }
            ],
            "connection": [
                {
                    "start": {
                        "x": 637.7904041608175,
                        "y": 301.59091101752387
                    },
                    "end": {
                        "x": 416.67929304970636,
                        "y": 144.9242443508572
                    }
                },
                {
                    "start": {
                        "x": 637.7904041608175,
                        "y": 301.59091101752387
                    },
                    "end": {
                        "x": 781.1237374941508,
                        "y": 129.36868879530164
                    }
                },
                {
                    "start": {
                        "x": 637.7904041608175,
                        "y": 301.59091101752387
                    },
                    "end": {
                        "x": 815.5681819385952,
                        "y": 436.0353554619683
                    }
                },
                {
                    "start": {
                        "x": 637.7904041608175,
                        "y": 301.59091101752387
                    },
                    "end": {
                        "x": 443.345959716373,
                        "y": 442.70202212863495
                    }
                }
            ]
        }
    ],
    "23-January-2025": [
        {
            "name": "23-January-2025-file-1",
            "date": "23-January-2025",
            "node": [
                {
                    "x": 637.7904041608175,
                    "y": 301.59091101752387,
                    "label": "DOM Manipulation Introduction",
                    "shape": "rectangle",
                    "width": 220,
                    "height": 70,
                    "isActive": false,
                    "fontsize": 16,
                    "description": "Learn how to manipulate the DOM using JavaScript.",
                    "fontcolor": "black",
                    "backgroundcolor": "#ffa600"
                },
                {
                    "x": 946.6792930497063,
                    "y": 201.59091101752387,
                    "label": "Selecting Elements",
                    "shape": "rectangle",
                    "width": 180,
                    "height": 50,
                    "isActive": false,
                    "fontsize": 16,
                    "description": "Learn how to select DOM elements using methods like getElementById and querySelector.",
                    "fontcolor": "black",
                    "backgroundcolor": "#faca00"
                },
                {
                    "x": 944.4570708274841,
                    "y": 298.25757768419055,
                    "label": "Modifying Elements",
                    "shape": "rectangle",
                    "width": 180,
                    "height": 50,
                    "isActive": false,
                    "fontsize": 16,
                    "description": "Learn how to modify DOM elements using innerHTML, style, and textContent.",
                    "fontcolor": "black",
                    "backgroundcolor": "#faca00"
                },
                {
                    "x": 943.345959716373,
                    "y": 399.36868879530164,
                    "label": "Event Handling",
                    "shape": "rectangle",
                    "width": 180,
                    "height": 50,
                    "isActive": false,
                    "fontsize": 16,
                    "description": "Learn how to handle events like click and mouseover in JavaScript.",
                    "fontcolor": "black",
                    "backgroundcolor": "#faca00"
                }
            ],
            "connection": [
                {
                    "start": {
                        "x": 637.7904041608175,
                        "y": 301.59091101752387
                    },
                    "end": {
                        "x": 946.6792930497063,
                        "y": 201.59091101752387
                    }
                },
                {
                    "start": {
                        "x": 637.7904041608175,
                        "y": 301.59091101752387
                    },
                    "end": {
                        "x": 944.4570708274841,
                        "y": 298.25757768419055
                    }
                },
                {
                    "start": {
                        "x": 637.7904041608175,
                        "y": 301.59091101752387
                    },
                    "end": {
                        "x": 943.345959716373,
                        "y": 399.36868879530164
                    }
                }
            ]
        },
        {
            "name": "23-January-2025-file-2",
            "date": "23-January-2025",
            "node": [
                {
                    "x": 637.7904041608175,
                    "y": 301.59091101752387,
                    "label": "Advanced Functions and Closures",
                    "shape": "rectangle",
                    "width": 279,
                    "height": 70,
                    "isActive": false,
                    "fontsize": 16,
                    "description": "Explore advanced JavaScript concepts like closures, callbacks, and higher-order functions.",
                    "fontcolor": "black",
                    "backgroundcolor": "#ffa600"
                },
                {
                    "x": 946.6792930497063,
                    "y": 201.59091101752387,
                    "label": "Closures",
                    "shape": "rectangle",
                    "width": 180,
                    "height": 50,
                    "isActive": false,
                    "fontsize": 16,
                    "description": "Learn about closures in JavaScript, and how they capture and remember the environment.",
                    "fontcolor": "black",
                    "backgroundcolor": "#faca00"
                },
                {
                    "x": 944.4570708274841,
                    "y": 298.25757768419055,
                    "label": "Callbacks",
                    "shape": "rectangle",
                    "width": 180,
                    "height": 50,
                    "isActive": false,
                    "fontsize": 16,
                    "description": "Understand how callbacks are used to handle asynchronous operations.",
                    "fontcolor": "black",
                    "backgroundcolor": "#faca00"
                },
                {
                    "x": 943.345959716373,
                    "y": 399.36868879530164,
                    "label": "Higher-order Functions",
                    "shape": "rectangle",
                    "width": 180,
                    "height": 50,
                    "isActive": false,
                    "fontsize": 16,
                    "description": "Learn how higher-order functions allow you to pass functions as arguments.",
                    "fontcolor": "black",
                    "backgroundcolor": "#faca00"
                },
                {
                    "x": 821.1237374941508,
                    "y": 493.8131332397461,
                    "label": "Function Scope vs Block Scope",
                    "shape": "rectangle",
                    "width": 267,
                    "height": 50,
                    "isActive": false,
                    "fontsize": 16,
                    "description": "Understand the difference between function scope and block scope in JavaScript.",
                    "fontcolor": "black",
                    "backgroundcolor": "#faca00"
                }
            ],
            "connection": [
                {
                    "start": {
                        "x": 637.7904041608175,
                        "y": 301.59091101752387
                    },
                    "end": {
                        "x": 946.6792930497063,
                        "y": 201.59091101752387
                    }
                },
                {
                    "start": {
                        "x": 637.7904041608175,
                        "y": 301.59091101752387
                    },
                    "end": {
                        "x": 944.4570708274841,
                        "y": 298.25757768419055
                    }
                },
                {
                    "start": {
                        "x": 637.7904041608175,
                        "y": 301.59091101752387
                    },
                    "end": {
                        "x": 943.345959716373,
                        "y": 399.36868879530164
                    }
                },
                {
                    "start": {
                        "x": 637.7904041608175,
                        "y": 301.59091101752387
                    },
                    "end": {
                        "x": 821.1237374941508,
                        "y": 493.8131332397461
                    }
                }
            ]
        }
    ],
    "24-January-2025": [
        {
            "name": "24-January-2025-file-1",
            "date": "24-January-2025",
            "node": [
                {
                    "x": 637.7904041608175,
                    "y": 301.59091101752387,
                    "label": "ES6 Features Introduction",
                    "shape": "rectangle",
                    "width": 220,
                    "height": 70,
                    "isActive": false,
                    "fontsize": 16,
                    "description": "Learn about modern JavaScript features introduced in ES6.",
                    "fontcolor": "black",
                    "backgroundcolor": "#ffa600"
                },
                {
                    "x": 946.6792930497063,
                    "y": 201.59091101752387,
                    "label": "Destructuring",
                    "shape": "rectangle",
                    "width": 180,
                    "height": 50,
                    "isActive": false,
                    "fontsize": 16,
                    "description": "Learn how to destructure arrays and objects in JavaScript.",
                    "fontcolor": "black",
                    "backgroundcolor": "#faca00"
                },
                {
                    "x": 944.4570708274841,
                    "y": 298.25757768419055,
                    "label": "Template Literals",
                    "shape": "rectangle",
                    "width": 180,
                    "height": 50,
                    "isActive": false,
                    "fontsize": 16,
                    "description": "Explore template literals for more readable string interpolation.",
                    "fontcolor": "black",
                    "backgroundcolor": "#faca00"
                },
                {
                    "x": 943.345959716373,
                    "y": 399.36868879530164,
                    "label": "Spread Operator",
                    "shape": "rectangle",
                    "width": 180,
                    "height": 50,
                    "isActive": false,
                    "fontsize": 16,
                    "description": "Learn how to use the spread operator to expand or copy objects and arrays.",
                    "fontcolor": "black",
                    "backgroundcolor": "#faca00"
                },
                {
                    "x": 821.1237374941508,
                    "y": 493.8131332397461,
                    "label": "Default Parameters",
                    "shape": "rectangle",
                    "width": 180,
                    "height": 50,
                    "isActive": false,
                    "fontsize": 16,
                    "description": "Learn how to set default parameter values for functions.",
                    "fontcolor": "black",
                    "backgroundcolor": "#faca00"
                }
            ],
            "connection": [
                {
                    "start": {
                        "x": 637.7904041608175,
                        "y": 301.59091101752387
                    },
                    "end": {
                        "x": 946.6792930497063,
                        "y": 201.59091101752387
                    }
                },
                {
                    "start": {
                        "x": 637.7904041608175,
                        "y": 301.59091101752387
                    },
                    "end": {
                        "x": 944.4570708274841,
                        "y": 298.25757768419055
                    }
                },
                {
                    "start": {
                        "x": 637.7904041608175,
                        "y": 301.59091101752387
                    },
                    "end": {
                        "x": 943.345959716373,
                        "y": 399.36868879530164
                    }
                },
                {
                    "start": {
                        "x": 637.7904041608175,
                        "y": 301.59091101752387
                    },
                    "end": {
                        "x": 821.1237374941508,
                        "y": 493.8131332397461
                    }
                }
            ]
        }
    ]
}








// Mind Map Template
let mindmapTemplate = [

    {
        "name": "18-January-2025-file-1",
        "node": [
            {
                "x": 637.7904041608175,
                "y": 301.59091101752387,
                "label": "Main Topic",
                "shape": "rectangle",
                "width": 150,
                "height": 70,
                "isActive": false,
                "fontsize": 16,
                "description": "",
                "fontcolor": "black",
                "backgroundcolor": "#ffa600"
            },
            {
                "x": 946.6792930497063,
                "y": 201.59091101752387,
                "label": "Sub Topic",
                "shape": "rectangle",
                "width": 140,
                "height": 50,
                "isActive": false,
                "fontsize": 16,
                "description": "Sub Topic 1",
                "fontcolor": "black",
                "backgroundcolor": "#faca00"
            },
            {
                "x": 944.4570708274841,
                "y": 298.25757768419055,
                "label": "Sub Topic",
                "shape": "rectangle",
                "width": 140,
                "height": 50,
                "isActive": false,
                "fontsize": 16,
                "description": "",
                "fontcolor": "black",
                "backgroundcolor": "#faca00"
            },
            {
                "x": 943.345959716373,
                "y": 399.36868879530164,
                "label": "Sub Topic",
                "shape": "rectangle",
                "width": 140,
                "height": 50,
                "isActive": false,
                "fontsize": 16,
                "description": "",
                "fontcolor": "black",
                "backgroundcolor": "#faca00"
            },
            {
                "x": 821.1237374941508,
                "y": 493.8131332397461,
                "label": "Sub Topic",
                "shape": "rectangle",
                "width": 140,
                "height": 50,
                "isActive": false,
                "fontsize": 16,
                "description": "",
                "fontcolor": "black",
                "backgroundcolor": "#faca00"
            },
            {
                "x": 656.6792930497063,
                "y": 498.25757768419055,
                "label": "Sub Topic",
                "shape": "rectangle",
                "width": 140,
                "height": 50,
                "isActive": false,
                "fontsize": 16,
                "description": "",
                "fontcolor": "black",
                "backgroundcolor": "#faca00"
            },
            {
                "x": 493.345959716373,
                "y": 497.1464665730794,
                "label": "Sub Topic",
                "shape": "rectangle",
                "width": 140,
                "height": 50,
                "isActive": false,
                "fontsize": 16,
                "description": "",
                "fontcolor": "black",
                "backgroundcolor": "#faca00"
            },
            {
                "x": 824.4570708274841,
                "y": 117.14646657307942,
                "label": "Sub Topic",
                "shape": "rectangle",
                "width": 140,
                "height": 50,
                "isActive": false,
                "fontsize": 16,
                "description": "",
                "fontcolor": "black",
                "backgroundcolor": "#faca00"
            },
            {
                "x": 665.5681819385952,
                "y": 117.14646657307942,
                "label": "Sub Topic",
                "shape": "rectangle",
                "width": 140,
                "height": 50,
                "isActive": false,
                "fontsize": 16,
                "description": "",
                "fontcolor": "black",
                "backgroundcolor": "#faca00"
            },
            {
                "x": 505.5681819385952,
                "y": 119.36868879530165,
                "label": "Sub Topic",
                "shape": "rectangle",
                "width": 140,
                "height": 50,
                "isActive": false,
                "fontsize": 16,
                "description": "",
                "fontcolor": "black",
                "backgroundcolor": "#faca00"
            },
            {
                "x": 341.1237374941508,
                "y": 202.70202212863498,
                "label": "Sub Topic",
                "shape": "rectangle",
                "width": 140,
                "height": 50,
                "isActive": false,
                "fontsize": 16,
                "description": "",
                "fontcolor": "black",
                "backgroundcolor": "#faca00"
            },
            {
                "x": 335.5681819385952,
                "y": 294.9242443508572,
                "label": "New Node",
                "shape": "rectangle",
                "width": 140,
                "height": 50,
                "isActive": false,
                "fontsize": 16,
                "description": "",
                "fontcolor": "black",
                "backgroundcolor": "#faca00"
            },
            {
                "x": 342.2348486052619,
                "y": 392.70202212863495,
                "label": "Sub Topic",
                "shape": "rectangle",
                "width": 140,
                "height": 50,
                "isActive": false,
                "fontsize": 16,
                "description": "",
                "fontcolor": "black",
                "backgroundcolor": "#faca00"
            }
        ],
        "connection": [
            {
                "start": {
                    "x": 637.7904041608175,
                    "y": 301.59091101752387,

                },
                "end": {
                    "x": 335.5681819385952,
                    "y": 294.9242443508572,

                }
            },
            {
                "start": {
                    "x": 637.7904041608175,
                    "y": 301.59091101752387,

                },
                "end": {
                    "x": 665.5681819385952,
                    "y": 117.14646657307942,

                }
            },
            {
                "start": {
                    "x": 637.7904041608175,
                    "y": 301.59091101752387,

                },
                "end": {
                    "x": 944.4570708274841,
                    "y": 298.25757768419055,

                }
            },
            {
                "start": {
                    "x": 637.7904041608175,
                    "y": 301.59091101752387
                },
                "end": {
                    "x": 824.4570708274841,
                    "y": 117.14646657307942
                }
            },
            {
                "start": {
                    "x": 637.7904041608175,
                    "y": 301.59091101752387
                },
                "end": {
                    "x": 505.5681819385952,
                    "y": 119.36868879530165
                }
            },
            {
                "start": {
                    "x": 637.7904041608175,
                    "y": 301.59091101752387
                },
                "end": {
                    "x": 943.345959716373,
                    "y": 399.36868879530164
                }
            },
            {
                "start": {
                    "x": 637.7904041608175,
                    "y": 301.59091101752387
                },
                "end": {
                    "x": 821.1237374941508,
                    "y": 493.8131332397461
                }
            },
            {
                "start": {
                    "x": 637.7904041608175,
                    "y": 301.59091101752387
                },
                "end": {
                    "x": 656.6792930497063,
                    "y": 498.25757768419055
                }
            },
            {
                "start": {
                    "x": 637.7904041608175,
                    "y": 301.59091101752387
                },
                "end": {
                    "x": 493.345959716373,
                    "y": 497.1464665730794
                }
            },
            {
                "start": {
                    "x": 637.7904041608175,
                    "y": 301.59091101752387
                },
                "end": {
                    "x": 342.2348486052619,
                    "y": 392.70202212863495
                }
            },
            {
                "start": {
                    "x": 637.7904041608175,
                    "y": 301.59091101752387
                },
                "end": {
                    "x": 341.1237374941508,
                    "y": 202.70202212863498
                }
            }
        ]
    },


    {
        "name": "First template",
        "node": [
            {
                "x": 522.2348486052618,
                "y": 289.36868879530164,
                "label": "Mind Map",
                "shape": "circle",
                "width": 79,
                "height": 39,
                "isActive": false,
                "fontsize": 20,
                "description": "What's the main topic?",
                "fontcolor": "black",
                "backgroundcolor": "#f640fb"
            },
            {
                "x": 427.79040416081745,
                "y": -1.7424223158094618,
                "label": "Add Idea",
                "shape": "rectangle",
                "width": 75,
                "height": 75,
                "isActive": false,
                "fontsize": 16,
                "description": "",
                "fontcolor": "black",
                "backgroundcolor": "#ff7f50"
            },
            {
                "x": 527.7904041608175,
                "y": 119.36868879530165,
                "label": "Add Idea",
                "shape": "rectangle",
                "width": 75,
                "height": 75,
                "isActive": false,
                "fontsize": 16,
                "description": "",
                "fontcolor": "black",
                "backgroundcolor": "#ffa600"
            },
            {
                "x": 621.1237374941508,
                "y": -3.964644538031684,
                "label": "Add Idea",
                "shape": "rectangle",
                "width": 75,
                "height": 75,
                "isActive": false,
                "fontsize": 16,
                "description": "",
                "fontcolor": "black",
                "backgroundcolor": "#19a8b4"
            },
            {
                "x": 1001.1237374941508,
                "y": 207.1464665730794,
                "label": "Add Idea",
                "shape": "rectangle",
                "width": 75,
                "height": 75,
                "isActive": false,
                "fontsize": 16,
                "description": "",
                "fontcolor": "black",
                "backgroundcolor": "#ff7f50"
            },
            {
                "x": 828.9015152719286,
                "y": 288.25757768419055,
                "label": "Add Idea",
                "shape": "rectangle",
                "width": 75,
                "height": 75,
                "isActive": false,
                "fontsize": 16,
                "description": "",
                "fontcolor": "black",
                "backgroundcolor": "#ffa600"
            },
            {
                "x": 1006.6792930497063,
                "y": 380.4797999064128,
                "label": "Add Idea",
                "shape": "rectangle",
                "width": 75,
                "height": 75,
                "isActive": false,
                "fontsize": 16,
                "description": "",
                "fontcolor": "black",
                "backgroundcolor": "#19a8b4"
            },
            {
                "x": 524.4570708274841,
                "y": 443.8131332397461,
                "label": "Add Idea",
                "shape": "rectangle",
                "width": 75,
                "height": 75,
                "isActive": false,
                "fontsize": 16,
                "description": "",
                "fontcolor": "black",
                "backgroundcolor": "#ffa600"
            },
            {
                "x": 628.9015152719286,
                "y": 548.2575776841906,
                "label": "Add Idea",
                "shape": "rectangle",
                "width": 75,
                "height": 75,
                "isActive": false,
                "fontsize": 16,
                "description": "",
                "fontcolor": "black",
                "backgroundcolor": "#19a8b4"
            },
            {
                "x": 424.45707082748413,
                "y": 553.8131332397461,
                "label": "Add Idea",
                "shape": "rectangle",
                "width": 75,
                "height": 75,
                "isActive": false,
                "fontsize": 16,
                "description": "",
                "fontcolor": "black",
                "backgroundcolor": "#ff7f50"
            },
            {
                "x": 232.2348486052619,
                "y": 294.9242443508572,
                "label": "Add Idea",
                "shape": "rectangle",
                "width": 75,
                "height": 75,
                "isActive": false,
                "fontsize": 16,
                "description": "",
                "fontcolor": "black",
                "backgroundcolor": "#ffa600"
            },
            {
                "x": 118.90151527192857,
                "y": 183.8131332397461,
                "label": "Add Idea",
                "shape": "rectangle",
                "width": 75,
                "height": 75,
                "isActive": false,
                "fontsize": 16,
                "description": "",
                "fontcolor": "black",
                "backgroundcolor": "#ff7f50"
            },
            {
                "x": 121.12373749415079,
                "y": 403.8131332397461,
                "label": "Add Idea",
                "shape": "rectangle",
                "width": 75,
                "height": 75,
                "isActive": false,
                "fontsize": 16,
                "description": "",
                "fontcolor": "black",
                "backgroundcolor": "#19a8b4"
            }
        ],
        "connection": [
            {
                "start": {
                    "x": 118.90151527192857,
                    "y": 183.8131332397461
                },
                "end": {
                    "x": 118.90151527192857,
                    "y": 183.8131332397461
                }
            },
            {
                "start": {
                    "x": 232.2348486052619,
                    "y": 294.9242443508572
                },
                "end": {
                    "x": 118.90151527192857,
                    "y": 183.8131332397461
                }
            },
            {
                "start": {
                    "x": 232.2348486052619,
                    "y": 294.9242443508572
                },
                "end": {
                    "x": 121.12373749415079,
                    "y": 403.8131332397461
                }
            },
            {
                "start": {
                    "x": 232.2348486052619,
                    "y": 294.9242443508572
                },
                "end": {
                    "x": 522.2348486052618,
                    "y": 289.36868879530164
                }
            },
            {
                "start": {
                    "x": 522.2348486052618,
                    "y": 289.36868879530164
                },
                "end": {
                    "x": 524.4570708274841,
                    "y": 443.8131332397461
                }
            },
            {
                "start": {
                    "x": 524.4570708274841,
                    "y": 443.8131332397461
                },
                "end": {
                    "x": 424.45707082748413,
                    "y": 553.8131332397461
                }
            },
            {
                "start": {
                    "x": 524.4570708274841,
                    "y": 443.8131332397461
                },
                "end": {
                    "x": 628.9015152719286,
                    "y": 548.2575776841906
                }
            },
            {
                "start": {
                    "x": 522.2348486052618,
                    "y": 289.36868879530164
                },
                "end": {
                    "x": 522.2348486052618,
                    "y": 289.36868879530164
                }
            },
            {
                "start": {
                    "x": 522.2348486052618,
                    "y": 289.36868879530164
                },
                "end": {
                    "x": 828.9015152719286,
                    "y": 288.25757768419055
                }
            },
            {
                "start": {
                    "x": 828.9015152719286,
                    "y": 288.25757768419055
                },
                "end": {
                    "x": 1006.6792930497063,
                    "y": 380.4797999064128
                }
            },
            {
                "start": {
                    "x": 828.9015152719286,
                    "y": 288.25757768419055
                },
                "end": {
                    "x": 1001.1237374941508,
                    "y": 207.1464665730794
                }
            },
            {
                "start": {
                    "x": 522.2348486052618,
                    "y": 289.36868879530164
                },
                "end": {
                    "x": 527.7904041608175,
                    "y": 119.36868879530165
                }
            },
            {
                "start": {
                    "x": 527.7904041608175,
                    "y": 119.36868879530165
                },
                "end": {
                    "x": 427.79040416081745,
                    "y": -1.7424223158094618
                }
            },
            {
                "start": {
                    "x": 527.7904041608175,
                    "y": 119.36868879530165
                },
                "end": {
                    "x": 621.1237374941508,
                    "y": -3.964644538031684
                }
            }
        ]

    },

    {
        "name": "First template",
        "node": [
            {
                "x": 518.7642046809196,
                "y": 46.789774894714355,
                "label": "Mind Map",
                "shape": "circle",
                "width": 79,
                "height": 39,
                "isActive": false,
                "fontsize": 20,
                "description": "What's the main topic?",
                "fontcolor": "black",
                "backgroundcolor": "#f640fb"
            },
            {
                "x": 888.7642046809196,
                "y": 9.289774894714355,
                "label": "Add Idea",
                "shape": "rectangle",
                "width": 75,
                "height": 75,
                "isActive": false,
                "fontsize": 16,
                "description": "",
                "fontcolor": "black",
                "backgroundcolor": "#ff7f50"
            },
            {
                "x": 740.0142046809196,
                "y": 45.539774894714355,
                "label": "Add Idea",
                "shape": "rectangle",
                "width": 75,
                "height": 75,
                "isActive": false,
                "fontsize": 16,
                "description": "",
                "fontcolor": "black",
                "backgroundcolor": "#ffa600"
            },
            {
                "x": 890.0142046809196,
                "y": 136.78977489471436,
                "label": "Add Idea",
                "shape": "rectangle",
                "width": 75,
                "height": 75,
                "isActive": false,
                "fontsize": 16,
                "description": "",
                "fontcolor": "black",
                "backgroundcolor": "#19a8b4"
            },
            {
                "x": 732.5142046809196,
                "y": 219.28977489471436,
                "label": "Add Idea",
                "shape": "rectangle",
                "width": 75,
                "height": 75,
                "isActive": false,
                "fontsize": 16,
                "description": "",
                "fontcolor": "black",
                "backgroundcolor": "#ff7f50"
            },
            {
                "x": 595.0142046809196,
                "y": 224.28977489471436,
                "label": "Add Idea",
                "shape": "rectangle",
                "width": 75,
                "height": 75,
                "isActive": false,
                "fontsize": 16,
                "description": "",
                "fontcolor": "black",
                "backgroundcolor": "#ffa600"
            },
            {
                "x": 657.5142046809196,
                "y": 376.78977489471436,
                "label": "Add Idea",
                "shape": "rectangle",
                "width": 75,
                "height": 75,
                "isActive": false,
                "fontsize": 16,
                "description": "",
                "fontcolor": "black",
                "backgroundcolor": "#19a8b4"
            },
            {
                "x": 431.26420468091965,
                "y": 226.78977489471436,
                "label": "Add Idea",
                "shape": "rectangle",
                "width": 75,
                "height": 75,
                "isActive": false,
                "fontsize": 16,
                "description": "",
                "fontcolor": "black",
                "backgroundcolor": "#ffa600"
            },
            {
                "x": 358.76420468091965,
                "y": 374.28977489471436,
                "label": "Add Idea",
                "shape": "rectangle",
                "width": 75,
                "height": 75,
                "isActive": false,
                "fontsize": 16,
                "description": "",
                "fontcolor": "black",
                "backgroundcolor": "#19a8b4"
            },
            {
                "x": 281.26420468091965,
                "y": 223.03977489471436,
                "label": "Add Idea",
                "shape": "rectangle",
                "width": 75,
                "height": 75,
                "isActive": false,
                "fontsize": 16,
                "description": "",
                "fontcolor": "black",
                "backgroundcolor": "#ff7f50"
            },
            {
                "x": 262.51420468091965,
                "y": 49.289774894714355,
                "label": "Add Idea",
                "shape": "rectangle",
                "width": 75,
                "height": 75,
                "isActive": false,
                "fontsize": 16,
                "description": "",
                "fontcolor": "black",
                "backgroundcolor": "#ffa600"
            },
            {
                "x": 93.76420468091965,
                "y": 14.289774894714355,
                "label": "Add Idea",
                "shape": "rectangle",
                "width": 75,
                "height": 75,
                "isActive": false,
                "fontsize": 16,
                "description": "",
                "fontcolor": "black",
                "backgroundcolor": "#ff7f50"
            },
            {
                "x": 95.01420468091965,
                "y": 131.78977489471436,
                "label": "Add Idea",
                "shape": "rectangle",
                "width": 75,
                "height": 75,
                "isActive": false,
                "fontsize": 16,
                "description": "",
                "fontcolor": "black",
                "backgroundcolor": "#19a8b4"
            }
        ],
        "connection": [
            {
                "start": {
                    "x": 93.76420468091965,
                    "y": 14.289774894714355
                },
                "end": {
                    "x": 93.76420468091965,
                    "y": 14.289774894714355
                }
            },
            {
                "start": {
                    "x": 262.51420468091965,
                    "y": 49.289774894714355
                },
                "end": {
                    "x": 93.76420468091965,
                    "y": 14.289774894714355
                }
            },
            {
                "start": {
                    "x": 262.51420468091965,
                    "y": 49.289774894714355
                },
                "end": {
                    "x": 95.01420468091965,
                    "y": 131.78977489471436
                }
            },
            {
                "start": {
                    "x": 262.51420468091965,
                    "y": 49.289774894714355
                },
                "end": {
                    "x": 518.7642046809196,
                    "y": 46.789774894714355
                }
            },
            {
                "start": {
                    "x": 518.7642046809196,
                    "y": 46.789774894714355
                },
                "end": {
                    "x": 431.26420468091965,
                    "y": 226.78977489471436
                }
            },
            {
                "start": {
                    "x": 431.26420468091965,
                    "y": 226.78977489471436
                },
                "end": {
                    "x": 281.26420468091965,
                    "y": 223.03977489471436
                }
            },
            {
                "start": {
                    "x": 431.26420468091965,
                    "y": 226.78977489471436
                },
                "end": {
                    "x": 358.76420468091965,
                    "y": 374.28977489471436
                }
            },
            {
                "start": {
                    "x": 518.7642046809196,
                    "y": 46.789774894714355
                },
                "end": {
                    "x": 518.7642046809196,
                    "y": 46.789774894714355
                }
            },
            {
                "start": {
                    "x": 518.7642046809196,
                    "y": 46.789774894714355
                },
                "end": {
                    "x": 595.0142046809196,
                    "y": 224.28977489471436
                }
            },
            {
                "start": {
                    "x": 595.0142046809196,
                    "y": 224.28977489471436
                },
                "end": {
                    "x": 657.5142046809196,
                    "y": 376.78977489471436
                }
            },
            {
                "start": {
                    "x": 595.0142046809196,
                    "y": 224.28977489471436
                },
                "end": {
                    "x": 732.5142046809196,
                    "y": 219.28977489471436
                }
            },
            {
                "start": {
                    "x": 740.0142046809196,
                    "y": 45.539774894714355
                },
                "end": {
                    "x": 888.7642046809196,
                    "y": 9.289774894714355
                }
            },
            {
                "start": {
                    "x": 740.0142046809196,
                    "y": 45.539774894714355
                },
                "end": {
                    "x": 890.0142046809196,
                    "y": 136.78977489471436
                }
            },
            {
                "start": {
                    "x": 518.7642046809196,
                    "y": 46.789774894714355
                },
                "end": {
                    "x": 740.0142046809196,
                    "y": 45.539774894714355
                }
            }
        ]

    },

    {
        "name": "18-January-2025-file-1",
        "node": [
            {
                "x": 580.016233921051,
                "y": 372.0454570225307,
                "label": "What's your main idea or topic?",
                "shape": "circle",
                "width": 75,
                "height": 75,
                "isActive": false,
                "fontsize": 10,
                "description": "",
                "fontcolor": "#18243c",
                "backgroundcolor": "#ffa600"
            },
            {
                "x": 832.2348486052618,
                "y": 466.0353554619683,
                "label": "Add idea",
                "shape": "rectangle",
                "width": 138,
                "height": 86,
                "isActive": false,
                "fontsize": 16,
                "description": "",
                "fontcolor": "#121212",
                "backgroundcolor": "#fb9740"
            },
            {
                "x": 302.2348486052619,
                "y": 474.9242443508572,
                "label": "Add idea",
                "shape": "rectangle",
                "width": 138,
                "height": 86,
                "isActive": false,
                "fontsize": 16,
                "description": "",
                "fontcolor": "black",
                "backgroundcolor": "#fb9740"
            },
            {
                "x": 348.5876624924796,
                "y": 266.33117130824496,
                "label": "Add a related idea",
                "shape": "circle",
                "width": 96,
                "height": 36,
                "isActive": false,
                "fontsize": 16,
                "description": "",
                "fontcolor": "black",
                "backgroundcolor": "#406dfb"
            },
            {
                "x": 858.5876624924795,
                "y": 286.33117130824496,
                "label": "Add a related idea",
                "shape": "circle",
                "width": 96,
                "height": 36,
                "isActive": false,
                "fontsize": 16,
                "description": "",
                "fontcolor": "black",
                "backgroundcolor": "#406dfb"
            },
            {
                "x": 1115.7305196353366,
                "y": 330.61688559395924,
                "label": "Add a related idea",
                "shape": "circle",
                "width": 96,
                "height": 36,
                "isActive": false,
                "fontsize": 16,
                "description": "",
                "fontcolor": "black",
                "backgroundcolor": "#406dfb"
            },
            {
                "x": 90.01623392105101,
                "y": 326.33117130824496,
                "label": "Add a related idea",
                "shape": "circle",
                "width": 96,
                "height": 36,
                "isActive": false,
                "fontsize": 16,
                "description": "",
                "fontcolor": "black",
                "backgroundcolor": "#406dfb"
            },
            {
                "x": 62.87337677819388,
                "y": 170.61688559395924,
                "label": "Add a sub-idea",
                "shape": "circle",
                "width": 85,
                "height": 23,
                "isActive": false,
                "fontsize": 15,
                "description": "",
                "fontcolor": "black",
                "backgroundcolor": "#89c4f4"
            },
            {
                "x": 324.3019482067653,
                "y": 114.90259987967355,
                "label": "Add a sub-idea",
                "shape": "circle",
                "width": 85,
                "height": 23,
                "isActive": false,
                "fontsize": 15,
                "description": "",
                "fontcolor": "black",
                "backgroundcolor": "#89c4f4"
            },
            {
                "x": 838.5876624924795,
                "y": 110.61688559395925,
                "label": "Add a sub-idea",
                "shape": "circle",
                "width": 85,
                "height": 23,
                "isActive": false,
                "fontsize": 15,
                "description": "",
                "fontcolor": "black",
                "backgroundcolor": "#89c4f4"
            },
            {
                "x": 1111.4448053496224,
                "y": 160.61688559395924,
                "label": "Add a sub-idea",
                "shape": "circle",
                "width": 85,
                "height": 23,
                "isActive": false,
                "fontsize": 15,
                "description": "",
                "fontcolor": "black",
                "backgroundcolor": "#89c4f4"
            }
        ],
        "connection": [
            {
                "start": {
                    "x": 580.016233921051,
                    "y": 372.0454570225307
                },
                "end": {
                    "x": 302.2348486052619,
                    "y": 474.9242443508572
                }
            },
            {
                "start": {
                    "x": 580.016233921051,
                    "y": 372.0454570225307
                },
                "end": {
                    "x": 832.2348486052618,
                    "y": 466.0353554619683
                }
            },
            {
                "start": {
                    "x": 302.2348486052619,
                    "y": 474.9242443508572
                },
                "end": {
                    "x": 348.5876624924796,
                    "y": 266.33117130824496
                }
            },
            {
                "start": {
                    "x": 302.2348486052619,
                    "y": 474.9242443508572
                },
                "end": {
                    "x": 90.01623392105101,
                    "y": 326.33117130824496
                }
            },
            {
                "start": {
                    "x": 832.2348486052618,
                    "y": 466.0353554619683
                },
                "end": {
                    "x": 858.5876624924795,
                    "y": 286.33117130824496
                }
            },
            {
                "start": {
                    "x": 832.2348486052618,
                    "y": 466.0353554619683
                },
                "end": {
                    "x": 1115.7305196353366,
                    "y": 330.61688559395924
                }
            },
            {
                "start": {
                    "x": 90.01623392105101,
                    "y": 326.33117130824496
                },
                "end": {
                    "x": 62.87337677819388,
                    "y": 170.61688559395924
                }
            },
            {
                "start": {
                    "x": 348.5876624924796,
                    "y": 266.33117130824496
                },
                "end": {
                    "x": 324.3019482067653,
                    "y": 114.90259987967355
                }
            },
            {
                "start": {
                    "x": 858.5876624924795,
                    "y": 286.33117130824496
                },
                "end": {
                    "x": 838.5876624924795,
                    "y": 110.61688559395925
                }
            },
            {
                "start": {
                    "x": 1115.7305196353366,
                    "y": 330.61688559395924
                },
                "end": {
                    "x": 1111.4448053496224,
                    "y": 160.61688559395924
                }
            }
        ]

    },



]