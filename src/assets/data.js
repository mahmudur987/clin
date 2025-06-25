const data = [
  {
    mainHeading: "TranscriptX",
    examples: [
      {
        title:
          "Experience TranscriptX - Effortless, Accurate Medical Transcription",
        input: {
          dataType: "Doctor's Dictation",
          inputType: "Audio Input",
          content: `Okay, uh, patient is Sarah Chen, DOB 3/22/1978. Seen today, October 26th, 2023. Chief complaint... uh... right knee pain, ongoing for about 3 months, worse with activity, especially stairs. Subjective: Patient describes the pain as a dull ache, located medially. Rates it a 6/10 currently, can go up to 8/10 after exercise. Some morning stiffness, lasts maybe 15 minutes. No significant swelling reported, denies locking or giving way. Uh... tried over-the-counter Ibuprofen with some partial relief. No history of trauma. Otherwise healthy. Objective: Gait is non-antalgic. Right knee exam: No effusion visible. Mild tenderness to palpation over the medial joint line. McMurray's test is negative. Lachman and drawer tests stable. Range of motion is full, though terminal flexion elicits some discomfort medially. Assessment: Likely medial compartment osteoarthritis of the right knee. Differential includes medial meniscus tear, although less likely given exam findings. Plan: Uh... Obtain bilateral weight-bearing knee X-rays. Recommend continued NSAID use as needed, consider switching to Naproxen. Discussed physical therapy options for strengthening quadriceps and hamstrings. Also discussed... lifestyle modifications, weight management if applicable... oh, patient's BMI is 24, so that's fine. Follow up in 4 weeks with X-ray results to discuss further management, possibly including corticosteroid injection or referral to orthopedics if symptoms persist. End dictation.`,
        },
        output: {
          dataType: "TranscriptX Note",
          outputType: "AI-Generated Output",
          content: `
<p><strong>Patient:</strong> Sarah Chen</p>
<p><strong>DOB:</strong> 03/22/1978</p>
<p><strong>Date of Service:</strong> October 26, 2023</p>

<p><strong>Chief Complaint:</strong><br />
Right knee pain x 3 months.</p>

<p><strong>Subjective:</strong><br />
Patient reports right knee pain ongoing for approximately 3 months, described as a dull ache located medially. Pain worsens with activity, particularly stair climbing. Pain rated 6/10 currently, increasing to 8/10 post-exercise. Reports approximately 15 minutes of morning stiffness. Denies significant swelling, locking, or episodes of giving way. Partial relief noted with over-the-counter Ibuprofen. No history of trauma. Patient is otherwise healthy.</p>

<p><strong>Objective:</strong><br />
<strong>Gait:</strong> Non-antalgic.<br />
<strong>Right Knee Exam:</strong> No visible effusion. Mild tenderness to palpation over the medial joint line. Full range of motion; terminal flexion elicits mild medial discomfort. McMurray's test negative. Lachman test negative. Anterior/Posterior Drawer tests negative (knee stable).</p>

<p><strong>BMI:</strong> 24</p>

<p><strong>Assessment:</strong><br />
Medial compartment osteoarthritis, right knee (probable).<br />
Rule out medial meniscus tear (less likely).</p>

<p><strong>Plan:</strong><br />
- Order bilateral weight-bearing knee X-rays (AP, lateral, sunrise views).<br />
- Recommend continued PRN NSAID use (consider trial of Naproxen 500mg BID PRN).<br />
- Discussed referral for Physical Therapy focusing on quadriceps/hamstring strengthening.<br />
- Discussed lifestyle modifications.<br />
- Follow up in 4 weeks to review X-ray results and clinical progress. Consider intra-articular corticosteroid injection or orthopedic referral if symptoms persist or worsen.</p>
        `,
        },
      },
    ],
  },
  {
    mainHeading: "Chartwright",
  },
  {
    mainHeading: "Redactify",
  },
  {
    mainHeading: "Validify",
  },
];
