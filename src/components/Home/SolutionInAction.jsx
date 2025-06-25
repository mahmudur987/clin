import { Tab } from "@headlessui/react";
import { useState } from "react";
import "../../Style/style.css";

const solutionsData = [
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
    examples: [
      {
        title: "Messy Hypertension & URI Cleanup",
        input: {
          dataType: "Doctor Note",
          inputType: "Text",
          content: `Pateint Name: Sarah Jones...`,
        },
        output: {
          dataType: "Chartwright Chart",
          outputType: "AI‑Enhanced",
          content: `<p>Patient: Sarah Jones</p>...`,
        },
      },
      {
        title: "Ankle Sprain ER Note",
        input: {
          dataType: "ER Note",
          inputType: "Text",
          content: `ER physician note: Pt twisted ankle stepping...`,
        },
        output: {
          dataType: "Chartwright Chart",
          outputType: "AI‑Enhanced",
          content: `<p>Patient: Emily Carson</p>...`,
        },
      },
      {
        title: "Post‑Appendectomy Follow‑Up",
        input: {
          dataType: "Clinic Note",
          inputType: "Text",
          content: `Follow‑up after appendectomy: healing well...`,
        },
        output: {
          dataType: "Chartwright Chart",
          outputType: "AI‑Enhanced",
          content: `<p>Patient: Tom Lewis</p>...`,
        },
      },
    ],
  },
  {
    mainHeading: "Redactify",
    examples: [
      {
        title: "Clinical Text Redaction",
        input: {
          dataType: "Clinical Note",
          inputType: "Text",
          content: `John Smith, DOB: 01/01/1980, SSN: 123‑45‑6789...`,
        },
        output: {
          dataType: "Redacted Note",
          outputType: "Anonymized",
          content: `[REDACTED]`,
        },
      },
      {
        title: "Consent Form Redaction",
        input: {
          dataType: "Consent Form",
          inputType: "PDF",
          content: `PDF with patient name and DOB...`,
        },
        output: {
          dataType: "Redacted Form",
          outputType: "PDF",
          content: `Preview of redacted PDF`,
        },
      },
      {
        title: "Lab Report De‑identification",
        input: {
          dataType: "Lab Report",
          inputType: "Text",
          content: `Lab report includes name: Jane Doe...`,
        },
        output: {
          dataType: "Redacted Lab Report",
          outputType: "Text",
          content: `Lab results with identifiers removed`,
        },
      },
    ],
  },
  {
    mainHeading: "Validify",
    examples: [
      {
        title: "Chart Review Compliance Check",
        input: {
          dataType: "Clinical Note",
          inputType: "Text",
          content: `Clinical note to be validated...`,
        },
        output: {
          dataType: "Validation Report",
          outputType: "AI Analysis",
          content: `No compliance gaps found.`,
        },
      },
      {
        title: "Discharge Summary Audit",
        input: {
          dataType: "Discharge Summary",
          inputType: "Text",
          content: `Discharge after surgery: patient stable...`,
        },
        output: {
          dataType: "Audit Summary",
          outputType: "Validation",
          content: `Minor inconsistency: medication timing.`,
        },
      },
      {
        title: "ICD‑10 Code Suggestion",
        input: {
          dataType: "Progress Note",
          inputType: "Text",
          content: `Resident note: knee pain ongoing...`,
        },
        output: {
          dataType: "Validation Summary",
          outputType: "AI Output",
          content: `Suggested code: M25.561; add duration.`,
        },
      },
    ],
  },
];

export default function SolutionsInAction() {
  const [show, setShow] = useState(false);
  const [selectedExample, setSelectedExample] = useState(
    solutionsData[0].examples[0]
  );
  return (
    <section className="bg-[#1e293b]">
      <section
        id="solutions-in-action  "
        className="p-6 mx-auto  max-w-5xl flex flex-col items-center"
      >
        <h2 className="text-3xl md:text-5xl text-[#60a5fa] font-bold mb-6 text-center">
          See Our Solutions in Action
        </h2>

        <Tab.Group>
          <Tab.List className="flex justify-center mx-auto ">
            {solutionsData.map(({ mainHeading }) => (
              <Tab
                key={mainHeading}
                className={({ selected }) =>
                  `px-4 p-2 text-lg font-medium w-52 ${
                    selected ? " main-tab-active" : "main-tab"
                  }`
                }
              >
                {mainHeading}
              </Tab>
            ))}
          </Tab.List>

          <div
            onClick={() => setShow((pre) => !pre)}
            class="comparison-toggle rounded-b-lg max-w-5xl mx-auto"
          >
            Click to {show ? "collapse" : "expand"} comparison
          </div>
          <div>
            {show && (
              <Tab.Panels>
                {solutionsData.map((solution, i) => (
                  <Tab.Panel key={solution.mainHeading}>
                    <Tab.Group>
                      <Tab.List className="flex justify-center mb-4 w-full ">
                        {solution.examples.map((ex, i) => (
                          <Tab
                            key={i}
                            className={({ selected }) =>
                              `px-3 py-1  text-lg w-52 ${
                                selected
                                  ? "bg-blue-500 text-white"
                                  : "bg-gray-200 text-gray-600"
                              }`
                            }
                          >
                            example{i + 1}
                          </Tab>
                        ))}
                      </Tab.List>

                      <div className="text-white text-xl font-semibold py-5">
                        {selectedExample.title}
                      </div>

                      <Tab.Panels>
                        {solution.examples.map((ex, i) => (
                          <Tab.Panel key={i}>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                              <div className="p-4 bg-gray-50 rounded-xl shadow">
                                <h3 className="text-xl font-semibold mb-2">
                                  {ex.input.dataType}
                                </h3>
                                <p className="text-sm text-gray-500 mb-2">
                                  {ex.input.inputType}
                                </p>
                                <pre className="whitespace-pre-wrap text-sm text-gray-800">
                                  {ex.input.content}
                                </pre>
                              </div>

                              <div className="p-4 bg-blue-50 rounded-xl shadow">
                                <h3 className="text-xl font-semibold mb-2">
                                  {ex.output.dataType}
                                </h3>
                                <p className="text-sm text-gray-500 mb-2">
                                  {ex.output.outputType}
                                </p>
                                <div
                                  className="prose prose-sm max-w-none"
                                  dangerouslySetInnerHTML={{
                                    __html: ex.output.content,
                                  }}
                                />
                              </div>
                            </div>
                          </Tab.Panel>
                        ))}
                      </Tab.Panels>
                    </Tab.Group>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            )}
          </div>
        </Tab.Group>
      </section>
    </section>
  );
}
