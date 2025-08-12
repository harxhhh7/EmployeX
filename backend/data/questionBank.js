const questionBank = [
  {
    id: 1,
    question: "How do you manage a disagreement during a team project?",
    options: [
      { text: "Inform a superior without context", marks: 3 },
      { text: "React emotionally", marks: 2 },
      { text: "Assess and take constructive steps", marks: 4 },
      { text: "Avoid the situation", marks: 1 }
    ]
  },
  {
    id: 2,
    question: "What do you do if you're assigned a task outside your skill set?",
    options: [
      { text: "Inform a superior without context", marks: 3 },
      { text: "Avoid the situation", marks: 1 },
      { text: "React emotionally", marks: 2 },
      { text: "Assess and take constructive steps", marks: 4 }
    ]
  },
  {
    id: 3,
    question: "What is the best way to manage a tight deadline at work?",
    options: [
      { text: "Assess and take constructive steps", marks: 4 },
      { text: "React emotionally", marks: 2 },
      { text: "Avoid the situation", marks: 1 },
      { text: "Inform a superior without context", marks: 3 }
    ]
  },
  {
    id: 4,
    question: "What’s the appropriate action when you make a mistake at work?",
    options: [
      { text: "Avoid the situation", marks: 1 },
      { text: "Inform a superior without context", marks: 3 },
      { text: "React emotionally", marks: 2 },
      { text: "Assess and take constructive steps", marks: 4 }
    ]
  },
  {
    id: 5,
    question: "How do you manage stress before an important deadline?",
    options: [
      { text: "Avoid the situation", marks: 1 },
      { text: "React emotionally", marks: 2 },
      { text: "Inform a superior without context", marks: 3 },
      { text: "Assess and take constructive steps", marks: 4 }
    ]
  },
  {
    id: 6,
    question: "What steps do you take to stay organized and productive?",
    options: [
      { text: "Assess and take constructive steps", marks: 4 },
      { text: "Inform a superior without context", marks: 3 },
      { text: "React emotionally", marks: 2 },
      { text: "Avoid the situation", marks: 1 }
    ]
  },
  {
    id: 7,
    question: "How do you ensure clear communication in a remote team?",
    options: [
      { text: "Assess and take constructive steps", marks: 4 },
      { text: "Avoid the situation", marks: 1 },
      { text: "React emotionally", marks: 2 },
      { text: "Inform a superior without context", marks: 3 }
    ]
  },
  {
    id: 8,
    question: "What’s your method of handling repetitive tasks efficiently?",
    options: [
      { text: "Inform a superior without context", marks: 3 },
      { text: "Assess and take constructive steps", marks: 4 },
      { text: "Avoid the situation", marks: 1 },
      { text: "React emotionally", marks: 2 }
    ]
  },
  {
    id: 9,
    question: "When facing multiple urgent tasks, what’s your approach?",
    options: [
      { text: "Inform a superior without context", marks: 3 },
      { text: "Assess and take constructive steps", marks: 4 },
      { text: "Avoid the situation", marks: 1 },
      { text: "React emotionally", marks: 2 }
    ]
  },
  {
    id: 10,
    question: "How do you respond when a new software or process is introduced?",
    options: [
      { text: "Inform a superior without context", marks: 3 },
      { text: "Avoid the situation", marks: 1 },
      { text: "Assess and take constructive steps", marks: 4 },
      { text: "React emotionally", marks: 2 }
    ]
  },
  {
    id: 11,
    question: "How would you support a colleague who's struggling?",
    options: [
      { text: "Inform a superior without context", marks: 3 },
      { text: "Avoid the situation", marks: 1 },
      { text: "React emotionally", marks: 2 },
      { text: "Assess and take constructive steps", marks: 4 }
    ]
  },
  {
    id: 12,
    question: "What do you do when you're feeling overwhelmed with work?",
    options: [
      { text: "Inform a superior without context", marks: 3 },
      { text: "React emotionally", marks: 2 },
      { text: "Avoid the situation", marks: 1 },
      { text: "Assess and take constructive steps", marks: 4 }
    ]
  },
  {
    id: 13,
    question: "How should one react to constructive feedback from a manager?",
    options: [
      { text: "Avoid the situation", marks: 1 },
      { text: "Assess and take constructive steps", marks: 4 },
      { text: "Inform a superior without context", marks: 3 },
      { text: "React emotionally", marks: 2 }
    ]
  },
  {
    id: 14,
    question: "What do you do when your work is criticized publicly?",
    options: [
      { text: "Inform a superior without context", marks: 3 },
      { text: "React emotionally", marks: 2 },
      { text: "Assess and take constructive steps", marks: 4 },
      { text: "Avoid the situation", marks: 1 }
    ]
  },
  {
    id: 15,
    question: "How do you approach working with someone with a different work style?",
    options: [
      { text: "React emotionally", marks: 2 },
      { text: "Avoid the situation", marks: 1 },
      { text: "Assess and take constructive steps", marks: 4 },
      { text: "Inform a superior without context", marks: 3 }
    ]
  },
  {
    id: 16,
    question: "If a teammate isn't contributing, how do you address the issue?",
    options: [
      { text: "Inform a superior without context", marks: 3 },
      { text: "Avoid the situation", marks: 1 },
      { text: "React emotionally", marks: 2 },
      { text: "Assess and take constructive steps", marks: 4 }
    ]
  },
  {
    id: 17,
    question: "How do you deal with last-minute changes to a project?",
    options: [
      { text: "Inform a superior without context", marks: 3 },
      { text: "Assess and take constructive steps", marks: 4 },
      { text: "React emotionally", marks: 2 },
      { text: "Avoid the situation", marks: 1 }
    ]
  },
  {
    id: 18,
    question: "What is your response to negative feedback from peers?",
    options: [
      { text: "Assess and take constructive steps", marks: 4 },
      { text: "React emotionally", marks: 2 },
      { text: "Avoid the situation", marks: 1 },
      { text: "Inform a superior without context", marks: 3 }
    ]
  },
  {
    id: 19,
    question: "How would you deal with a team member taking credit for your work?",
    options: [
      { text: "Assess and take constructive steps", marks: 4 },
      { text: "React emotionally", marks: 2 },
      { text: "Inform a superior without context", marks: 3 },
      { text: "Avoid the situation", marks: 1 }
    ]
  },
  {
    id: 20,
    question: "How do you manage distractions in a busy workplace?",
    options: [
      { text: "React emotionally", marks: 2 },
      { text: "Inform a superior without context", marks: 3 },
      { text: "Assess and take constructive steps", marks: 4 },
      { text: "Avoid the situation", marks: 1 }
    ]
  },
  {
    id: 21,
    question: "What would you do if you noticed unethical behavior at work?",
    options: [
      { text: "Inform a superior without context", marks: 3 },
      { text: "Assess and take constructive steps", marks: 4 },
      { text: "React emotionally", marks: 2 },
      { text: "Avoid the situation", marks: 1 }
    ]
  },
  {
    id: 22,
    question: "How would you handle a conflict with a coworker in a professional setting?",
    options: [
      { text: "React emotionally", marks: 2 },
      { text: "Inform a superior without context", marks: 3 },
      { text: "Avoid the situation", marks: 1 },
      { text: "Assess and take constructive steps", marks: 4 }
    ]
  },
  {
    id: 23,
    question: "How do you maintain motivation in long-term projects?",
    options: [
      { text: "Assess and take constructive steps", marks: 4 },
      { text: "Avoid the situation", marks: 1 },
      { text: "React emotionally", marks: 2 },
      { text: "Inform a superior without context", marks: 3 }
    ]
  },
  {
    id: 24,
    question: "How do you prepare for a big presentation or meeting?",
    options: [
      { text: "Inform a superior without context", marks: 3 },
      { text: "Avoid the situation", marks: 1 },
      { text: "Assess and take constructive steps", marks: 4 },
      { text: "React emotionally", marks: 2 }
    ]
  },
  {
    id: 25,
    question: "How do you prioritize your tasks on a busy day?",
    options: [
      { text: "Assess and take constructive steps", marks: 4 },
      { text: "Avoid the situation", marks: 1 },
      { text: "React emotionally", marks: 2 },
      { text: "Inform a superior without context", marks: 3 }
    ]
  },
  {
    id: 26,
    question: "What do you do if you receive unclear instructions for a task?",
    options: [
      { text: "Avoid the situation", marks: 1 },
      { text: "Inform a superior without context", marks: 3 },
      { text: "Assess and take constructive steps", marks: 4 },
      { text: "React emotionally", marks: 2 }
    ]
  },
  {
    id: 27,
    question: "How do you stay calm under pressure?",
    options: [
      { text: "React emotionally", marks: 2 },
      { text: "Assess and take constructive steps", marks: 4 },
      { text: "Avoid the situation", marks: 1 },
      { text: "Inform a superior without context", marks: 3 }
    ]
  },
  {
    id: 28,
    question: "How do you deal with an unexpected change in project scope?",
    options: [
      { text: "Inform a superior without context", marks: 3 },
      { text: "Assess and take constructive steps", marks: 4 },
      { text: "React emotionally", marks: 2 },
      { text: "Avoid the situation", marks: 1 }
    ]
  },
  {
    id: 29,
    question: "What is the best way to improve work efficiency?",
    options: [
      { text: "Assess and take constructive steps", marks: 4 },
      { text: "Avoid the situation", marks: 1 },
      { text: "Inform a superior without context", marks: 3 },
      { text: "React emotionally", marks: 2 }
    ]
  },
  {
    id: 30,
    question: "What do you do if your suggestions are constantly ignored?",
    options: [
      { text: "React emotionally", marks: 2 },
      { text: "Avoid the situation", marks: 1 },
      { text: "Inform a superior without context", marks: 3 },
      { text: "Assess and take constructive steps", marks: 4 }
    ]
  },
  {
    id: 31,
    question: "How do you make sure your team meets a tough deadline?",
    options: [
      { text: "Assess and take constructive steps", marks: 4 },
      { text: "Avoid the situation", marks: 1 },
      { text: "Inform a superior without context", marks: 3 },
      { text: "React emotionally", marks: 2 }
    ]
  },
  {
    id: 32,
    question: "How would you handle working with a micromanaging supervisor?",
    options: [
      { text: "Avoid the situation", marks: 1 },
      { text: "React emotionally", marks: 2 },
      { text: "Assess and take constructive steps", marks: 4 },
      { text: "Inform a superior without context", marks: 3 }
    ]
  },
  {
    id: 33,
    question: "What’s your approach to managing burnout?",
    options: [
      { text: "Inform a superior without context", marks: 3 },
      { text: "Avoid the situation", marks: 1 },
      { text: "Assess and take constructive steps", marks: 4 },
      { text: "React emotionally", marks: 2 }
    ]
  },
  {
    id: 34,
    question: "How do you stay productive when working from home?",
    options: [
      { text: "Assess and take constructive steps", marks: 4 },
      { text: "React emotionally", marks: 2 },
      { text: "Avoid the situation", marks: 1 },
      { text: "Inform a superior without context", marks: 3 }
    ]
  },
  {
    id: 35,
    question: "What is the best way to avoid workplace gossip?",
    options: [
      { text: "Avoid the situation", marks: 1 },
      { text: "React emotionally", marks: 2 },
      { text: "Assess and take constructive steps", marks: 4 },
      { text: "Inform a superior without context", marks: 3 }
    ]
  },
  {
    id: 36,
    question: "What would you do if your team misses a major milestone?",
    options: [
      { text: "Inform a superior without context", marks: 3 },
      { text: "Assess and take constructive steps", marks: 4 },
      { text: "React emotionally", marks: 2 },
      { text: "Avoid the situation", marks: 1 }
    ]
  },
  {
    id: 37,
    question: "How do you manage your energy throughout the workday?",
    options: [
      { text: "React emotionally", marks: 2 },
      { text: "Avoid the situation", marks: 1 },
      { text: "Assess and take constructive steps", marks: 4 },
      { text: "Inform a superior without context", marks: 3 }
    ]
  },
  {
    id: 38,
    question: "How would you manage a team member who constantly interrupts others?",
    options: [
      { text: "Assess and take constructive steps", marks: 4 },
      { text: "Avoid the situation", marks: 1 },
      { text: "React emotionally", marks: 2 },
      { text: "Inform a superior without context", marks: 3 }
    ]
  },
  {
    id: 39,
    question: "What is the best way to start your workday?",
    options: [
      { text: "Assess and take constructive steps", marks: 4 },
      { text: "Avoid the situation", marks: 1 },
      { text: "Inform a superior without context", marks: 3 },
      { text: "React emotionally", marks: 2 }
    ]
  },
  {
    id: 40,
    question: "How would you handle being excluded from a key meeting?",
    options: [
      { text: "React emotionally", marks: 2 },
      { text: "Assess and take constructive steps", marks: 4 },
      { text: "Avoid the situation", marks: 1 },
      { text: "Inform a superior without context", marks: 3 }
    ]
  },
  {
    id: 41,
    question: "How do you track progress in a long-term project?",
    options: [
      { text: "Inform a superior without context", marks: 3 },
      { text: "Assess and take constructive steps", marks: 4 },
      { text: "Avoid the situation", marks: 1 },
      { text: "React emotionally", marks: 2 }
    ]
  },
  {
    id: 42,
    question: "How do you maintain focus when working on tedious tasks?",
    options: [
      { text: "Avoid the situation", marks: 1 },
      { text: "React emotionally", marks: 2 },
      { text: "Assess and take constructive steps", marks: 4 },
      { text: "Inform a superior without context", marks: 3 }
    ]
  },
  {
    id: 43,
    question: "How do you approach multitasking when it’s necessary?",
    options: [
      { text: "Assess and take constructive steps", marks: 4 },
      { text: "Avoid the situation", marks: 1 },
      { text: "Inform a superior without context", marks: 3 },
      { text: "React emotionally", marks: 2 }
    ]
  },
  {
    id: 44,
    question: "What is your strategy for meeting tight client expectations?",
    options: [
      { text: "Assess and take constructive steps", marks: 4 },
      { text: "React emotionally", marks: 2 },
      { text: "Inform a superior without context", marks: 3 },
      { text: "Avoid the situation", marks: 1 }
    ]
  },
  {
    id: 45,
    question: "What would you do if a project is underperforming?",
    options: [
      { text: "React emotionally", marks: 2 },
      { text: "Avoid the situation", marks: 1 },
      { text: "Assess and take constructive steps", marks: 4 },
      { text: "Inform a superior without context", marks: 3 }
    ]
  },
  {
    id: 46,
    question: "How do you maintain healthy work-life balance?",
    options: [
      { text: "Avoid the situation", marks: 1 },
      { text: "Inform a superior without context", marks: 3 },
      { text: "Assess and take constructive steps", marks: 4 },
      { text: "React emotionally", marks: 2 }
    ]
  },
  {
    id: 47,
    question: "What would you do if you were not given credit for your work?",
    options: [
      { text: "React emotionally", marks: 2 },
      { text: "Assess and take constructive steps", marks: 4 },
      { text: "Inform a superior without context", marks: 3 },
      { text: "Avoid the situation", marks: 1 }
    ]
  },
  {
    id: 48,
    question: "How would you assist in improving your team’s morale?",
    options: [
      { text: "Inform a superior without context", marks: 3 },
      { text: "Avoid the situation", marks: 1 },
      { text: "React emotionally", marks: 2 },
      { text: "Assess and take constructive steps", marks: 4 }
    ]
  },
  {
    id: 49,
    question: "How do you keep yourself updated with job-related skills?",
    options: [
      { text: "Assess and take constructive steps", marks: 4 },
      { text: "Avoid the situation", marks: 1 },
      { text: "React emotionally", marks: 2 },
      { text: "Inform a superior without context", marks: 3 }
    ]
  },
  {
    id: 50,
    question: "How would you deal with a colleague who constantly distracts you?",
    options: [
      { text: "Inform a superior without context", marks: 3 },
      { text: "Assess and take constructive steps", marks: 4 },
      { text: "React emotionally", marks: 2 },
      { text: "Avoid the situation", marks: 1 }
    ]
  },
  {
    id: 51,
    question: "How do you deal with a team member who consistently misses deadlines?",
    options: [
      { text: "Discuss the issue privately and offer help", marks: 4 },
      { text: "Complain about them to the whole team", marks: 2 },
      { text: "Ignore it and hope it improves", marks: 1 },
      { text: "Publicly criticize them", marks: 3 }
    ]
  },
  {
    id: 52,
    question: "What would you do if your workload becomes unmanageable?",
    options: [
      { text: "Prioritize tasks and communicate with manager", marks: 4 },
      { text: "Start skipping tasks", marks: 1 },
      { text: "Blame teammates for delays", marks: 2 },
      { text: "Work overtime without telling anyone", marks: 3 }
    ]
  },
  {
    id: 53,
    question: "How would you act if your teammate receives recognition for your contribution?",
    options: [
      { text: "Approach your manager calmly and explain", marks: 4 },
      { text: "Start gossiping about it", marks: 2 },
      { text: "Stay silent and feel resentful", marks: 1 },
      { text: "Confront the teammate publicly", marks: 3 }
    ]
  },
  {
    id: 54,
    question: "How do you adapt to working with new technologies or tools?",
    options: [
      { text: "Take initiative to learn through courses or peers", marks: 4 },
      { text: "Complain that it's not your job", marks: 2 },
      { text: "Avoid the new tools entirely", marks: 1 },
      { text: "Wait until someone forces you to learn", marks: 3 }
    ]
  },
  {
    id: 55,
    question: "What do you do when your project’s priorities keep changing?",
    options: [
      { text: "Stay flexible and ask for clarity", marks: 4 },
      { text: "Ignore new instructions and stick to old plan", marks: 1 },
      { text: "Complain in team chat", marks: 2 },
      { text: "Wait for others to take the lead", marks: 3 }
    ]
  },
  {
    id: 56,
    question: "How would you support a new team member struggling to adjust?",
    options: [
      { text: "Offer guidance and check on them regularly", marks: 4 },
      { text: "Let them figure it out alone", marks: 1 },
      { text: "Criticize them in front of others", marks: 2 },
      { text: "Report their slowness immediately", marks: 3 }
    ]
  },
  {
    id: 57,
    question: "What is your response when a project faces continuous delays?",
    options: [
      { text: "Identify bottlenecks and suggest solutions", marks: 4 },
      { text: "Point fingers at teammates", marks: 2 },
      { text: "Ignore it and do your part only", marks: 3 },
      { text: "Wait for management to intervene", marks: 1 }
    ]
  },
  {
    id: 58,
    question: "How do you manage feedback that feels overly critical?",
    options: [
      { text: "Evaluate it objectively and improve", marks: 4 },
      { text: "Defend yourself aggressively", marks: 2 },
      { text: "Completely reject the feedback", marks: 1 },
      { text: "Complain to HR without discussing first", marks: 3 }
    ]
  },
  {
    id: 59,
    question: "How do you handle communication gaps in your team?",
    options: [
      { text: "Propose better communication channels", marks: 4 },
      { text: "Talk only when required", marks: 2 },
      { text: "Avoid meetings altogether", marks: 1 },
      { text: "Blame others for not informing you", marks: 3 }
    ]
  },
  {
    id: 60,
    question: "How do you handle client criticism about your project?",
    options: [
      { text: "Listen actively and implement suggestions", marks: 4 },
      { text: "Argue that they are wrong", marks: 2 },
      { text: "Ignore the feedback", marks: 1 },
      { text: "Pass the blame to someone else", marks: 3 }
    ]
  },
  {
    id: 61,
    question: "What do you do if a colleague plagiarizes your work?",
    options: [
      { text: "Document the issue and escalate respectfully", marks: 4 },
      { text: "Start plagiarizing their work too", marks: 1 },
      { text: "Call them out in a group meeting", marks: 3 },
      { text: "Let it go to avoid conflict", marks: 2 }
    ]
  },
  {
    id: 62,
    question: "How do you handle being micromanaged by a supervisor?",
    options: [
      { text: "Seek a respectful conversation to clarify expectations", marks: 4 },
      { text: "Ignore them and work your own way", marks: 2 },
      { text: "Get frustrated and stop putting in effort", marks: 1 },
      { text: "Complain to others about the manager", marks: 3 }
    ]
  },
  {
    id: 63,
    question: "How do you handle unfair treatment in the workplace?",
    options: [
      { text: "Raise concerns through proper channels", marks: 4 },
      { text: "Start treating others unfairly too", marks: 1 },
      { text: "Post about it on social media", marks: 2 },
      { text: "Argue with management during meetings", marks: 3 }
    ]
  },
  {
    id: 64,
    question: "How would you handle a colleague taking credit for your idea?",
    options: [
      { text: "Privately clarify your contribution with your manager", marks: 4 },
      { text: "Publicly argue with the colleague", marks: 3 },
      { text: "Let it go and stay quiet", marks: 1 },
      { text: "Spread rumors about them", marks: 2 }
    ]
  },
  {
    id: 65,
    question: "How do you respond to sudden project cancellation?",
    options: [
      { text: "Understand reasons and prepare for new tasks", marks: 4 },
      { text: "Complain and show disinterest", marks: 2 },
      { text: "Take a break and stop working", marks: 1 },
      { text: "Blame leadership during team calls", marks: 3 }
    ]
  },
  {
    id: 66,
    question: "What would you do if you disagreed with a company policy?",
    options: [
      { text: "Discuss with HR or leadership constructively", marks: 4 },
      { text: "Post negative reviews online", marks: 2 },
      { text: "Start ignoring the policy", marks: 1 },
      { text: "Complain to colleagues privately", marks: 3 }
    ]
  },
  {
    id: 67,
    question: "How do you manage conflicts in a multicultural team?",
    options: [
      { text: "Encourage open and respectful dialogue", marks: 4 },
      { text: "Pick sides based on your background", marks: 2 },
      { text: "Avoid talking to certain team members", marks: 1 },
      { text: "Complain about cultural issues to HR", marks: 3 }
    ]
  },
  {
    id: 68,
    question: "What do you do if you notice unethical behavior at work?",
    options: [
      { text: "Report it through appropriate channels", marks: 4 },
      { text: "Participate in it to avoid conflict", marks: 1 },
      { text: "Tell your friends about it", marks: 2 },
      { text: "Blackmail the person", marks: 3 }
    ]
  },
  {
    id: 69,
    question: "How would you handle a teammate who constantly interrupts you in meetings?",
    options: [
      { text: "Politely address it with them later", marks: 4 },
      { text: "Start interrupting them too", marks: 2 },
      { text: "Get angry in the meeting", marks: 3 },
      { text: "Stay silent forever", marks: 1 }
    ]
  },
  {
    id: 70,
    question: "What would you do if your manager rejects your idea without explanation?",
    options: [
      { text: "Ask for feedback to improve future ideas", marks: 4 },
      { text: "Argue with them immediately", marks: 3 },
      { text: "Feel discouraged and stop contributing", marks: 1 },
      { text: "Complain to your peers", marks: 2 }
    ]
  },
  {
    id: 71,
    question: "How do you ensure effective remote work communication?",
    options: [
      { text: "Schedule regular check-ins and updates", marks: 4 },
      { text: "Send vague messages occasionally", marks: 2 },
      { text: "Avoid using video or mic", marks: 1 },
      { text: "Work silently and wait for others to reach out", marks: 3 }
    ]
  },
  {
    id: 72,
    question: "How do you respond to a teammate taking frequent unplanned leaves?",
    options: [
      { text: "Check in with concern and inform your lead", marks: 4 },
      { text: "Mock them in group chat", marks: 2 },
      { text: "Ignore the impact on your work", marks: 1 },
      { text: "Start taking unplanned leaves too", marks: 3 }
    ]
  },
  {
    id: 73,
    question: "What do you do if your system crashes before an important deadline?",
    options: [
      { text: "Inform your lead and try alternate solutions", marks: 4 },
      { text: "Give up and say it's not your fault", marks: 1 },
      { text: "Blame IT and take a break", marks: 2 },
      { text: "Submit incomplete work anyway", marks: 3 }
    ]
  },
  {
    id: 74,
    question: "How would you respond to poor performance review feedback?",
    options: [
      { text: "Request a 1-on-1 to understand and improve", marks: 4 },
      { text: "Say the manager is biased", marks: 2 },
      { text: "Ignore the review and keep doing the same", marks: 1 },
      { text: "Threaten to quit", marks: 3 }
    ]
  },
  {
    id: 75,
    question: "What do you do if your team is missing important deadlines repeatedly?",
    options: [
      { text: "Organize a team review to find issues", marks: 4 },
      { text: "Start blaming individuals in public", marks: 3 },
      { text: "Stop caring about deadlines", marks: 1 },
      { text: "Push for unrealistic targets", marks: 2 }
    ]
  },
  {
    id: 76,
    question: "What would you do if a colleague made a serious mistake on a shared project?",
    options: [
      { text: "Blame them publicly", marks: 1 },
      { text: "Privately discuss the issue and help correct it", marks: 4 },
      { text: "Ignore it and move on", marks: 2 },
      { text: "Inform the manager with a full context", marks: 3 }
    ]
  },
  {
    id: 77,
    question: "How do you approach learning a new software required for your job?",
    options: [
      { text: "Wait for someone to teach you", marks: 2 },
      { text: "Explore it proactively and use online resources", marks: 4 },
      { text: "Avoid using it and stick to what you know", marks: 1 },
      { text: "Ask colleagues to do your part temporarily", marks: 3 }
    ]
  },
  {
    id: 78,
    question: "You’ve received vague instructions for a task. What do you do?",
    options: [
      { text: "Guess and do it your own way", marks: 2 },
      { text: "Ask for clarification to ensure accuracy", marks: 4 },
      { text: "Ignore the task", marks: 1 },
      { text: "Complain to other coworkers", marks: 3 }
    ]
  },
  {
    id: 79,
    question: "What would you do if you completed your assigned work early?",
    options: [
      { text: "Relax and take the rest of the day off", marks: 2 },
      { text: "Offer help to teammates", marks: 4 },
      { text: "Keep it to yourself", marks: 1 },
      { text: "Look for extra work only if asked", marks: 3 }
    ]
  },
  {
    id: 80,
    question: "How would you deal with a manager who micromanages your work?",
    options: [
      { text: "Start avoiding the manager", marks: 2 },
      { text: "Request a one-on-one meeting to discuss autonomy", marks: 4 },
      { text: "Complain to HR", marks: 3 },
      { text: "Ignore the situation", marks: 1 }
    ]
  },
  {
    id: 81,
    question: "You are offered a training session outside of work hours. What do you do?",
    options: [
      { text: "Decline because it’s your personal time", marks: 2 },
      { text: "Accept if it enhances your skills", marks: 4 },
      { text: "Attend but stay disengaged", marks: 1 },
      { text: "Ask if there’s compensation for time", marks: 3 }
    ]
  },
  {
    id: 82,
    question: "How do you handle feedback that you disagree with?",
    options: [
      { text: "Argue with your manager", marks: 2 },
      { text: "Listen calmly and ask for clarification", marks: 4 },
      { text: "Ignore the feedback", marks: 1 },
      { text: "Talk to peers to justify your actions", marks: 3 }
    ]
  },
  {
    id: 83,
    question: "Your teammate is struggling with a task you’re good at. What do you do?",
    options: [
      { text: "Wait for them to ask for help", marks: 3 },
      { text: "Proactively offer your assistance", marks: 4 },
      { text: "Criticize them for being slow", marks: 1 },
      { text: "Do it for them without asking", marks: 2 }
    ]
  },
  {
    id: 84,
    question: "What do you do if you're assigned a task outside your expertise?",
    options: [
      { text: "Refuse to do it", marks: 1 },
      { text: "Attempt it and seek help when needed", marks: 4 },
      { text: "Blame the manager for assigning it", marks: 2 },
      { text: "Delay the task hoping it gets reassigned", marks: 3 }
    ]
  },
  {
    id: 85,
    question: "Your team has opposing opinions during a meeting. You:",
    options: [
      { text: "Stay silent to avoid conflict", marks: 2 },
      { text: "Help mediate and find a middle ground", marks: 4 },
      { text: "Take sides aggressively", marks: 1 },
      { text: "Complain after the meeting", marks: 3 }
    ]
  },
  {
    id: 86,
    question: "You accidentally send the wrong file to a client. What is your next step?",
    options: [
      { text: "Ignore it and hope they don’t notice", marks: 1 },
      { text: "Immediately inform them and send the correct file", marks: 4 },
      { text: "Blame someone else", marks: 2 },
      { text: "Wait until they complain", marks: 3 }
    ]
  },
  {
    id: 87,
    question: "What do you do when you have to work with someone you dislike?",
    options: [
      { text: "Act cold and distant", marks: 2 },
      { text: "Maintain professionalism and focus on tasks", marks: 4 },
      { text: "Complain to HR", marks: 3 },
      { text: "Avoid working with them completely", marks: 1 }
    ]
  },
  {
    id: 88,
    question: "What is your response when your idea is rejected in a meeting?",
    options: [
      { text: "Get defensive and argue", marks: 2 },
      { text: "Accept feedback and try to improve it", marks: 4 },
      { text: "Feel demotivated and stop contributing", marks: 1 },
      { text: "Criticize others’ ideas instead", marks: 3 }
    ]
  },
  {
    id: 89,
    question: "How do you prepare for a presentation to senior management?",
    options: [
      { text: "Prepare thoroughly and practice", marks: 4 },
      { text: "Rely on improvisation", marks: 2 },
      { text: "Just copy old content", marks: 1 },
      { text: "Let someone else present", marks: 3 }
    ]
  },
  {
    id: 90,
    question: "What do you do if your system crashes right before a deadline?",
    options: [
      { text: "Blame the IT team", marks: 2 },
      { text: "Inform your manager and suggest alternatives", marks: 4 },
      { text: "Give up on submission", marks: 1 },
      { text: "Rush and submit incomplete work", marks: 3 }
    ]
  },
  {
    id: 91,
    question: "How do you react if a coworker keeps interrupting you?",
    options: [
      { text: "Politely ask them to wait", marks: 4 },
      { text: "Interrupt them back", marks: 2 },
      { text: "Complain to others about them", marks: 3 },
      { text: "Ignore them entirely", marks: 1 }
    ]
  },
  {
    id: 92,
    question: "You are praised for a project you didn’t do alone. You:",
    options: [
      { text: "Take all the credit", marks: 1 },
      { text: "Share credit with your team", marks: 4 },
      { text: "Ignore the praise", marks: 2 },
      { text: "Boast about it publicly", marks: 3 }
    ]
  },
  {
    id: 93,
    question: "Your company is going through restructuring. You:",
    options: [
      { text: "Spread rumors", marks: 1 },
      { text: "Stay informed and focused on your role", marks: 4 },
      { text: "Complain constantly", marks: 2 },
      { text: "Start looking for a new job immediately", marks: 3 }
    ]
  },
  {
    id: 94,
    question: "What do you do if your teammate’s work affects your performance?",
    options: [
      { text: "Criticize them publicly", marks: 1 },
      { text: "Speak to them constructively and offer help", marks: 4 },
      { text: "Complain behind their back", marks: 3 },
      { text: "Stay silent", marks: 2 }
    ]
  },
  {
    id: 95,
    question: "You notice errors in a submitted report. You:",
    options: [
      { text: "Ignore it since it's already submitted", marks: 1 },
      { text: "Immediately correct and resend", marks: 4 },
      { text: "Blame the team lead", marks: 2 },
      { text: "Wait for someone else to spot it", marks: 3 }
    ]
  },
  {
    id: 96,
    question: "How do you stay updated in your field?",
    options: [
      { text: "Regularly read, take courses, and attend webinars", marks: 4 },
      { text: "Rely only on office training", marks: 2 },
      { text: "Don't bother much", marks: 1 },
      { text: "Ask colleagues occasionally", marks: 3 }
    ]
  },
  {
    id: 97,
    question: "You are asked to take on a leadership role. You:",
    options: [
      { text: "Decline due to fear", marks: 1 },
      { text: "Accept and try your best", marks: 4 },
      { text: "Delegate everything", marks: 2 },
      { text: "Accept only for recognition", marks: 3 }
    ]
  },
  {
    id: 98,
    question: "How do you ensure your emails are clear?",
    options: [
      { text: "Use bullet points and proofread", marks: 4 },
      { text: "Type quickly and send", marks: 2 },
      { text: "Use slang and emojis", marks: 1 },
      { text: "Forward previous messages", marks: 3 }
    ]
  },
  {
    id: 99,
    question: "Your company is moving to a new tool. You:",
    options: [
      { text: "Resist using it", marks: 1 },
      { text: "Learn and adapt quickly", marks: 4 },
      { text: "Complain about the change", marks: 2 },
      { text: "Let others learn first", marks: 3 }
    ]
  },
  {
    id: 100,
    question: "What would you do if your personal issues are affecting your work?",
    options: [
      { text: "Take unapproved leave", marks: 1 },
      { text: "Speak to HR or manager for support", marks: 4 },
      { text: "Work with low productivity", marks: 2 },
      { text: "Blame work for your issues", marks: 3 }
    ]
  }
]

module.exports = questionBank;