import { useState,useEffect} from "react";
import { useSearchParams } from "react-router-dom";
const sections = [
  {
    id: "Introduction",
    title: "Introduction",
    content: (
      <div>
        <p className="py-3">
          Mental health is a state of mental well-being that enables people to
          cope with the stresses of life, realize their abilities, learn well
          and work well, and contribute to their community. It is an integral
          component of health and well-being that underpins our individual and
          collective abilities to make decisions, build relationships and shape
          the world we live in. Mental health is a basic human right. And it is
          crucial to personal, community and socio-economic development. Mental
          health is more than the absence of mental disorders. It exists on a
          complex continuum, which is experienced differently from one person to
          the next, with varying degrees of difficulty and distress and
          potentially very different social and clinical outcomes. Mental health
          conditions include mental disorders and psychosocial disabilities as
          well as other mental states associated with significant distress,
          impairment in functioning, or risk of self-harm. People with mental
          health conditions are more likely to experience lower levels of mental
          well-being, but this is not always or necessarily the case.
        </p>
        <h2 className="font-medium text-3xl py-4"> Key facts </h2>
        <ul className="list-disc px-8">
          <li className="p-4">
            Affordable, effective and feasible strategies exist to promote,
            protect and restore mental health.{" "}
          </li>
          <li className="p-4">
            The need for action on mental health is indisputable and urgent.{" "}
          </li>
          <li className="p-4">
            Mental health has intrinsic and instrumental value and is integral
            to our well-being.{" "}
          </li>
          <li className="p-4">
            Mental health is determined by a complex interplay of individual,
            social and structural stresses and vulnerabilities{" "}
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "Personality Disorders",
    title: "Personality Disorders",
    content: (
      <div className="scrollable">
        <p className="py-3">
          A personality disorder is a mental health condition in which a person
          exhibits long-term patterns of behavior, emotions, and thoughts that
          are significantly different from societal expectations. These patterns
          are often inflexible, causing distress and impairing daily
          functioning, relationships, and work-life balance.
        </p>
        <h2 className="font-medium text-3xl py-4">
          {" "}
          Key Features of Personality Disorders
        </h2>
        <ul className="list-disc px-8">
          <li className="p-4">
            <span className="font-medium">
              {" "}
              Enduring and Persistent Behavior Patterns
            </span>{" "}
            – Symptoms typically begin in adolescence or early adulthood and
            persist over time.
          </li>
          <li className="p-4">
            <span className="font-medium"> Difficulties in Relationships</span>{" "}
            – Challenges in maintaining friendships, romantic relationships, or
            professional interactions due to maladaptive behaviors.
          </li>
          <li className="p-4">
            <span className="font-medium"> Emotional Dysregulation</span>{" "}
            –Extreme or inappropriate emotional responses in various situations.
          </li>
          <li className="p-4">
            <span className="font-medium"> Impulsive and Risky Behavior</span> –
            Engaging in self-destructive activities such as reckless driving,
            substance abuse, or financial irresponsibility.
          </li>
        </ul>
        <div>
          <h2 className="font-medium text-3xl py-4">
            Types of Personality Disorders (Cluster Classification)
          </h2>
          <p className="  py-3">
            Mental health professionals categorize personality disorders into
            three clusters based on shared traits:
          </p>
          <h2 className="font-medium text-3xl py-4">
            Cluster A: Odd or Eccentric Behavior
          </h2>
          <ul className="list-decimal px-8">
            <li className=" py-3">
              <span className="font-medium">
                Paranoid Personality Disorder (PPD)
              </span>
              - Extreme distrust and suspicion of others, believing people have
              harmful intentions.
            </li>
            <li className=" py-3">
              <span className="font-medium">
                Schizoid Personality Disorder (SPD)
              </span>
              - Social detachment, little desire for relationships, emotional
              coldness.
            </li>
            <li className=" py-3">
              <span className="font-medium">
                Schizotypal Personality Disorder (STPD)
              </span>
              - Unusual thoughts, beliefs, and behaviors; discomfort in social
              interactions.
            </li>
            <h2 className="font-medium text-3xl py-4">
              Cluster B: Dramatic, Emotional, or Erratic Behavior
            </h2>
            <li className=" py-3">
              <span className="font-medium">
                Antisocial Personality Disorder (ASPD)
              </span>
              - Disregard for others’ rights, lack of empathy, manipulative and
              often unlawful behavior.
            </li>{" "}
            <li className=" py-3">
              <span className="font-medium">
                Borderline Personality Disorder (BPD)
              </span>
              - Intense mood swings, fear of abandonment, impulsivity, and
              self-harming behaviors.
            </li>{" "}
            <li className=" py-3">
              <span className="font-medium">
                Histrionic Personality Disorder (HPD){" "}
              </span>
              - Excessive attention-seeking, emotional overreaction, and an
              overwhelming need for approval.
            </li>{" "}
            <li className=" py-3">
              <span className="font-medium">
                Narcissistic Personality Disorder (NPD)
              </span>
              - Inflated self-importance, lack of empathy, and a constant need
              for admiration. interactions.
            </li>
            <h2 className="font-medium text-3xl py-4">
              Cluster C: Anxious or Fearful Behavior
            </h2>
            <li className=" py-3">
              <span className="font-medium">
                Avoidant Personality Disorder (AVPD)
              </span>
              - Intense fear of rejection and criticism, leading to social
              withdrawal despite a desire for connection.
            </li>{" "}
            <li className=" py-3">
              <span className="font-medium">
                Dependent Personality Disorder (DPD)
              </span>
              - Excessive reliance on others, difficulty making independent
              decisions.
            </li>{" "}
            <li className=" py-3">
              <span className="font-medium">
                Obsessive-Compulsive Personality Disorder (OCPD){" "}
              </span>
              - Extreme need for perfection, rigid adherence to rules, and
              difficulty delegating tasks.
            </li>
          </ul>
        </div>
        <h2 className="font-medium text-3xl py-4">
        Causes and Risk Factors
        </h2>
        <p className="py-3">While the exact cause of personality disorders is unknown, a combination of genetic, environmental, and psychological factors contributes to their development.
</p>
        <ul className="list-disc px-8">
            <li className="py-3"><p className="font-medium text-2xl py-2"> Biological Factors
            </p><span className="font-medium py-3 "> Genetics</span> – Family history of personality disorders or other mental illnesses increases the risk.<br/>
           <span className="font-medium "> Brain Structure and Function</span>  – Differences in brain regions that regulate emotions and impulse. </li>
            <li className="py-3"><p className="font-medium text-2xl py-2">  Environmental             Factors
            </p><span className="font-medium ">
             Parental Influence</span> – Overprotective, neglectful, or inconsistent parenting styles.
           <span className="font-medium "><br/>
             Childhood Trauma</span>  –Abuse, neglect, or an unstable home environment. </li>
            <li className="py-3"><p className="font-medium text-2xl py-2"> Psychological Factors
            </p><span className="font-medium ">
             Coping Mechanisms</span> – Poor stress management and unhealthy emotional regulation strategies.
           <span className="font-medium "><br/>
            Early Personality Development</span>  – Some traits develop during childhood and persist into adulthood </li>
        </ul>
        <h2 className="font-medium text-3xl py-4">
        Treatment Options
        </h2>  
        <p>While personality disorders are long-term conditions, treatment can help manage symptoms and improve quality of life.
</p>
<ul className="list-decimal px-8">
            <li className="py-3"><p className="font-medium text-2xl py-2"> Psychotherapy (Talk Therapy)

            </p><span className="font-medium py-3 ">
            Cognitive Behavioral Therapy (CBT)</span> – Helps change negative thinking patterns and behaviors.
            <br/>
           <span className="font-medium ">
            Dialectical Behavior Therapy (DBT)</span>  –  Especially effective for BPD, focusing on emotional regulation and mindfulness
            <br/>
           <span className="font-medium ">
            Group Therapy</span>  –   Provides peer support and helps develop social skills. </li>
            <li className="py-3"><p className="font-medium text-2xl py-2">  Medications (Though not a cure, medications help manage symptoms)
            </p><span className="font-medium ">
            Antidepressants </span> –For mood stabilization and anxiety reduction.
           <span className="font-medium "><br/>
           Mood Stabilizers</span>  – Help control mood swings and impulsivity. </li>
            <li className="py-3"><p className="font-medium text-2xl py-2"> Lifestyle Changes and Coping Strategies
            </p><span className="font-medium ">
         Exercise and Healthy Diet</span> – Helps with mood regulation.
           <span className="font-medium "><br/>
            Mindfulness and Stress Management</span>  – Reduces anxiety and improves emotional control. </li>
        </ul>
      </div>
    ),
  },
  {
    id: "Depression",
    title: "Depression",
    content: (    <div className="scrollable">
        <p className="py-3">
          Depression (Major Depressive Disorder) is a serious mental health condition that affects mood, thoughts, and behavior. It goes beyond just feeling sad—it is a persistent condition that interferes with daily life, relationships, and well-being.
        </p>
  
        <h2 className="font-medium text-3xl py-4">Symptoms of Depression</h2>
        <ul className="list-disc px-8">
          <li className="p-4"><span className="font-medium">Emotional Symptoms</span> – Persistent sadness, hopelessness, irritability, and feelings of guilt or worthlessness.</li>
          <li className="p-4"><span className="font-medium">Cognitive Symptoms</span> – Difficulty concentrating, negative thoughts, or suicidal ideation.</li>
          <li className="p-4"><span className="font-medium">Physical Symptoms</span> – Fatigue, appetite changes, sleep disturbances, and unexplained physical pain.</li>
        </ul>
  
        <h2 className="font-medium text-3xl py-4">Causes and Risk Factors</h2>
        <ul className="list-disc px-8">
          <li className="py-3"><span className="font-medium">Biological Factors</span> – Genetics, brain chemistry imbalances, and hormonal changes.</li>
          <li className="py-3"><span className="font-medium">Psychological Factors</span> – Negative thinking patterns, unresolved trauma, and chronic stress.</li>
          <li className="py-3"><span className="font-medium">Environmental Triggers</span> – Loss of a loved one, work stress, and substance abuse.</li>
        </ul>
  
        <h2 className="font-medium text-3xl py-4">Types of Depression</h2>
        <ul className="list-decimal px-8">
          <li className="py-3"><span className="font-medium">Major Depressive Disorder (MDD)</span> – Severe symptoms lasting at least two weeks.</li>
          <li className="py-3"><span className="font-medium">Persistent Depressive Disorder (Dysthymia)</span> – Chronic depression lasting over two years.</li>
          <li className="py-3"><span className="font-medium">Bipolar Disorder</span> – Alternating periods of depression and mania.</li>
          <li className="py-3"><span className="font-medium">Postpartum Depression</span> – Depression occurring after childbirth.</li>
          <li className="py-3"><span className="font-medium">Seasonal Affective Disorder (SAD)</span> – Depression related to seasonal changes.</li>
          <li className="py-3"><span className="font-medium">Atypical Depression</span> – Mood improvement with positive events but persistent sadness.</li>
        </ul>
  
        <h2 className="font-medium text-3xl py-4">Diagnosis and Treatment</h2>
        <ul className="list-disc px-8">
          <li className="py-3"><span className="font-medium">Diagnosis</span> – Includes clinical interviews, mental health questionnaires, and medical evaluations.</li>
        </ul>
  
        <h2 className="font-medium text-3xl py-4">Treatment Options</h2>
        <ul className="list-decimal px-8">
          <li className="py-3"><span className="font-medium">Psychotherapy (Talk Therapy)</span> – Cognitive Behavioral Therapy (CBT), Interpersonal Therapy (IPT), and Dialectical Behavior Therapy (DBT).</li>
          <li className="py-3"><span className="font-medium">Medications</span> – Antidepressants such as SSRIs, SNRIs, and MAOIs.</li>
          <li className="py-3"><span className="font-medium">Lifestyle Changes</span> – Exercise, healthy diet, sleep regulation, and social support.</li>
          <li className="py-3"><span className="font-medium">Alternative Treatments</span> – Mindfulness, meditation, and light therapy.</li>
        </ul>
  
        <h2 className="font-medium text-3xl py-4">Living with Depression</h2>
        <p className="py-3">Seeking help is a sign of strength. If you or someone you know is struggling, reach out to a mental health professional. Small steps can lead to big improvements.</p>
      </div>),
  },

  {
    id: "Anxiety",
    title: "Anxiety",
    content: (
        <div className="scrollable">
        <p className="py-3">
          Anxiety is a natural response to stress, but when it becomes persistent
          and overwhelming, it can interfere with daily life. Anxiety disorders
          involve excessive fear, worry, or nervousness that can impact
          well-being and productivity.
        </p>
        
        <h2 className="font-medium text-3xl py-4">Symptoms of Anxiety</h2>
        <ul className="list-disc px-8">
          <li className="p-4"><span className="font-medium">Emotional Symptoms:</span> Persistent worry, fear, or nervousness.</li>
          <li className="p-4"><span className="font-medium">Cognitive Symptoms:</span> Racing thoughts, difficulty concentrating, or irrational fears.</li>
          <li className="p-4"><span className="font-medium">Physical Symptoms:</span> Rapid heartbeat, sweating, dizziness, or shortness of breath.</li>
          <li className="p-4"><span className="font-medium">Behavioral Symptoms:</span> Avoidance of anxiety-triggering situations or social withdrawal.</li>
        </ul>
  
        <h2 className="font-medium text-3xl py-4">Causes and Risk Factors</h2>
        <p className="py-3">Anxiety disorders result from a mix of biological, psychological, and environmental factors.</p>
        <ul className="list-disc px-8">
          <li className="py-3"><span className="font-medium">Genetics:</span> Family history of anxiety increases the risk.</li>
          <li className="py-3"><span className="font-medium">Brain Chemistry:</span> Imbalance in neurotransmitters like serotonin and dopamine.</li>
          <li className="py-3"><span className="font-medium">Stressful Life Events:</span> Trauma, abuse, or significant life changes.</li>
          <li className="py-3"><span className="font-medium">Personality Traits:</span> Perfectionism and high sensitivity to stress.</li>
        </ul>
  
        <h2 className="font-medium text-3xl py-4">Types of Anxiety Disorders</h2>
        <ul className="list-decimal px-8">
          <li className="py-3"><span className="font-medium">Generalized Anxiety Disorder (GAD):</span> Persistent, excessive worry about everyday situations.</li>
          <li className="py-3"><span className="font-medium">Panic Disorder:</span> Recurrent panic attacks with intense fear and physical symptoms.</li>
          <li className="py-3"><span className="font-medium">Social Anxiety Disorder:</span> Fear of being judged or embarrassed in social situations.</li>
          <li className="py-3"><span className="font-medium">Obsessive-Compulsive Disorder (OCD):</span> Intrusive thoughts leading to repetitive behaviors.</li>
          <li className="py-3"><span className="font-medium">Post-Traumatic Stress Disorder (PTSD):</span> Anxiety triggered by past traumatic events.</li>
          <li className="py-3"><span className="font-medium">Phobias:</span> Intense fear of specific objects or situations.</li>
        </ul>
  
        <h2 className="font-medium text-3xl py-4">Diagnosis and Treatment</h2>
        <p className="py-3">Anxiety disorders are diagnosed through clinical interviews, psychological assessments, and medical tests to rule out underlying conditions.</p>
        
        <h2 className="font-medium text-3xl py-4">Treatment Options</h2>
        <ul className="list-decimal px-8">
          <li className="py-3"><span className="font-medium">Psychotherapy:</span> Cognitive Behavioral Therapy (CBT) and Exposure Therapy help change anxious thoughts and behaviors.</li>
          <li className="py-3"><span className="font-medium">Medications:</span> Antidepressants (SSRIs, SNRIs) and anti-anxiety medications.</li>
          <li className="py-3"><span className="font-medium">Lifestyle Changes:</span> Exercise, balanced diet, and proper sleep improve anxiety management.</li>
          <li className="py-3"><span className="font-medium">Mindfulness and Relaxation Techniques:</span> Meditation, yoga, and deep breathing exercises reduce stress.</li>
        </ul>
  
        <h2 className="font-medium text-3xl py-4">Living with Anxiety</h2>
        <p className="py-3">Managing anxiety takes time, but with the right treatment and coping strategies, individuals can lead a fulfilling life.</p>
        <p className="py-3">If you or someone you know is struggling with anxiety, seeking professional help can make a difference.</p>
      </div>
    ),
  },{
    id:"Services",
    title:"Services",
    content:(
        <div className="scrollable">
      <p className="py-3">
        Mental health issues can be managed and overcome with the right support. Here are key services available for individuals seeking help:
      </p>

      <h2 className="font-medium text-3xl py-4">1. Professional Therapy & Counseling</h2>
      <ul className="list-disc px-8">
        <li className="p-4">
          <span className="font-medium">Individual Therapy</span> – One-on-one sessions to address personal mental health challenges.
        </li>
        <li className="p-4">
          <span className="font-medium">Couples Therapy</span> – Helps partners improve communication and resolve conflicts.
        </li>
        <li className="p-4">
          <span className="font-medium">Child Therapy</span> – Focused support for children dealing with emotional and psychological issues.
        </li>
      </ul>

      <h2 className="font-medium text-3xl py-4">2. Specialized Therapies</h2>
      <ul className="list-disc px-8">
        <li className="p-4">
          <span className="font-medium">Spravato Therapy</span> – A nasal spray treatment for treatment-resistant depression.
        </li>
        <li className="p-4">
          <span className="font-medium">Relaxation Therapy</span> – Techniques to reduce stress and promote mental calmness.
        </li>
        <li className="p-4">
          <span className="font-medium">Sarvato Therapy</span> – A holistic approach integrating multiple therapeutic techniques.
        </li>
      </ul>

      <p className="py-3 font-medium text-xl text-center">Seeking help is a sign of strength. Support is available, and recovery is possible. 💙</p>
    </div>

    )
  },
  {
    id:"IndividualTherapy",
    title:"Individual Therapy",
    content:(
        <div className="scrollable">
        <p className="py-3">
          Individual therapy, also known as one-on-one therapy or psychotherapy, is a structured form of counseling where a trained mental health professional helps an individual address emotional, psychological, and behavioral challenges.
        </p>
        
        <h2 className="font-medium text-3xl py-4">Benefits of Individual Therapy</h2>
        <ul className="list-disc px-8">
          <li className="p-4"><span className="font-medium">Safe and Confidential Space:</span> Provides a private setting to discuss personal issues without judgment.</li>
          <li className="p-4"><span className="font-medium">Coping Strategies:</span> Helps develop effective techniques for managing stress, anxiety, and depression.</li>
          <li className="p-4"><span className="font-medium">Self-Awareness and Growth:</span> Enhances emotional regulation and personal development.</li>
          <li className="p-4"><span className="font-medium">Healing Trauma:</span> Supports individuals in processing past experiences and building resilience.</li>
          <li className="p-4"><span className="font-medium">Improved Relationships:</span> Helps individuals understand and improve their interpersonal connections.</li>
        </ul>
      
        <h2 className="font-medium text-3xl py-4">Who Can Benefit from Individual Therapy?</h2>
        <ul className="list-disc px-8">
          <li className="py-3">Individuals experiencing anxiety, depression, or emotional distress.</li>
          <li className="py-3">Those struggling with past trauma or PTSD.</li>
          <li className="py-3">People facing relationship or self-esteem issues.</li>
          <li className="py-3">Anyone dealing with stress, burnout, or major life transitions.</li>
        </ul>
      
        <h2 className="font-medium text-3xl py-4">How to Access Individual Therapy</h2>
        <p className="py-3">Seeking therapy is a positive step toward self-improvement. Here’s how you can get started:</p>
        <ul className="list-decimal px-8">
          <li className="py-3"><span className="font-medium">Find a Therapist:</span> Research and choose a professional suited to your needs.</li>
          <li className="py-3"><span className="font-medium">Schedule a Consultation:</span> Many therapists offer an initial session to discuss concerns and goals.</li>
          <li className="py-3"><span className="font-medium">Commit to the Process:</span> Regular sessions and active participation lead to meaningful progress.</li>
        </ul>
      
        <h2 className="font-medium text-3xl py-4">Start Your Journey</h2>
        <p className="py-3">If you're considering individual therapy, taking the first step can bring significant positive changes. Seeking help is a sign of strength, and support is available.</p>
      </div>
      
    )
  },{
    id:"CouplesTherapy",
    title:"Couples Therapy",
    content:(
        <div className="scrollable">
      <p className="py-3">
        Couples therapy is a form of counseling designed to help partners improve communication,
        resolve conflicts, and build stronger emotional connections. It provides a safe and guided
        space to address relationship challenges and foster growth.
      </p>
      
      <h2 className="font-medium text-3xl py-4">Benefits of Couples Therapy</h2>
      <ul className="list-disc px-8">
        <li className="p-4"><span className="font-medium">Improved Communication:</span> Learn healthy ways to express thoughts and emotions.</li>
        <li className="p-4"><span className="font-medium">Conflict Resolution:</span> Develop strategies to navigate disagreements constructively.</li>
        <li className="p-4"><span className="font-medium">Emotional Intimacy:</span> Strengthen emotional bonds and understanding between partners.</li>
        <li className="p-4"><span className="font-medium">Trust Building:</span> Address trust issues and work towards rebuilding confidence in the relationship.</li>
        <li className="p-4"><span className="font-medium">Coping with Life Transitions:</span> Manage stressors like marriage, parenting, or career changes together.</li>
      </ul>

      <h2 className="font-medium text-3xl py-4">Common Issues Addressed</h2>
      <ul className="list-disc px-8">
        <li className="p-4">Frequent arguments and unresolved conflicts</li>
        <li className="p-4">Infidelity and trust issues</li>
        <li className="p-4">Lack of emotional or physical intimacy</li>
        <li className="p-4">Parenting disagreements</li>
        <li className="p-4">Stress from financial or lifestyle differences</li>
      </ul>

      <h2 className="font-medium text-3xl py-4">Therapeutic Approaches</h2>
      <ul className="list-disc px-8">
        <li className="p-4"><span className="font-medium">Emotionally Focused Therapy (EFT):</span> Helps couples understand and respond to each other’s emotional needs.</li>
        <li className="p-4"><span className="font-medium">Gottman Method:</span> Based on research, it teaches skills for healthy interactions and conflict management.</li>
        <li className="p-4"><span className="font-medium">Cognitive Behavioral Therapy (CBT) for Couples:</span> Identifies negative thought patterns and promotes positive changes.</li>
      </ul>

      <h2 className="font-medium text-3xl py-4">Getting Started with Couples Therapy</h2>
      <p className="py-3">If you and your partner are experiencing relationship challenges, seeking professional help can make a significant difference. A licensed therapist can guide you toward deeper understanding and a healthier partnership.</p>
      <p className="py-3 font-medium text-xl text-center">Your relationship deserves care and support. Taking the first step toward healing is a sign of strength. 💙</p>
    </div>
 
    )
  },{
    id:"ChildTherapy",
    title:"Child Therapy",
    content:(<div className="scrollable">
        <p className="py-3">
          Child therapy helps children process emotions, develop healthy coping mechanisms, and improve communication skills. It provides a supportive environment for children to express their thoughts and feelings.
        </p>
      
        <h2 className="font-medium text-3xl py-4">Benefits of Child Therapy</h2>
        <ul className="list-disc px-8">
          <li className="p-4"><span className="font-medium">Emotional Support:</span> Helps children express and manage their emotions in a safe environment.</li>
          <li className="p-4"><span className="font-medium">Improved Behavior:</span> Addresses behavioral issues like aggression, anxiety, or social withdrawal.</li>
          <li className="p-4"><span className="font-medium">Coping Skills:</span> Teaches strategies for handling stress, change, and trauma.</li>
          <li className="p-4"><span className="font-medium">Stronger Relationships:</span> Enhances communication and bonding with family and peers.</li>
        </ul>
      
        <h2 className="font-medium text-3xl py-4">Who Can Benefit from Child Therapy?</h2>
        <p className="py-3">Child therapy can support children facing:</p>
        <ul className="list-disc px-8">
          <li className="p-4">Anxiety or depression</li>
          <li className="p-4">Behavioral issues or ADHD</li>
          <li className="p-4">Trauma or grief</li>
          <li className="p-4">Parental divorce or separation</li>
          <li className="p-4">Social difficulties or bullying</li>
        </ul>
      
        <h2 className="font-medium text-3xl py-4">Types of Child Therapy</h2>
        <ul className="list-decimal px-8">
          <li className="p-4"><span className="font-medium">Play Therapy:</span> Uses toys and activities to help children express emotions.</li>
          <li className="p-4"><span className="font-medium">Cognitive Behavioral Therapy (CBT):</span> Teaches children to manage thoughts and behaviors.</li>
          <li className="p-4"><span className="font-medium">Family Therapy:</span> Strengthens family relationships and improves communication.</li>
          <li className="p-4"><span className="font-medium">Art & Music Therapy:</span> Encourages creative expression for emotional healing.</li>
        </ul>
      
        <h2 className="font-medium text-3xl py-4">How to Get Started</h2>
        <p className="py-3">If your child is struggling with emotional or behavioral challenges, seeking professional therapy can provide them with the right support and guidance.</p>
        <p className="py-3 font-medium text-xl text-center">Help your child build confidence and resilience. Explore child therapy options today! 💙</p>
      </div>
      )
  },{
    id:"SpravatoTherapy",
    title:"Spravato Therapy",
    content:(<div className="scrollable">
        <p className="py-3">
          Spravato (esketamine) therapy is an FDA-approved treatment for individuals with treatment-resistant depression (TRD) and major depressive disorder (MDD) with suicidal thoughts. It offers rapid relief for those who have not responded to traditional antidepressants.
        </p>
      
        <h2 className="font-medium text-3xl py-4">How Does Spravato Work?</h2>
        <p className="py-3">
          Spravato is a nasal spray that works differently from conventional antidepressants. It targets the NMDA receptors in the brain, helping to restore neural connections and improve mood quickly.
        </p>
      
        <h2 className="font-medium text-3xl py-4">Who Can Benefit from Spravato Therapy?</h2>
        <p className="py-3">Spravato may be recommended for individuals who:</p>
        <ul className="list-disc px-8">
          <li className="p-4">Have not found relief with at least two traditional antidepressants.</li>
          <li className="p-4">Struggle with major depressive disorder (MDD) with suicidal ideation.</li>
          <li className="p-4">Experience severe, persistent depressive symptoms.</li>
        </ul>
      
        <h2 className="font-medium text-3xl py-4">Benefits of Spravato Therapy</h2>
        <ul className="list-disc px-8">
          <li className="p-4"><span className="font-medium">Rapid Symptom Relief:</span> Many patients report improvements within hours or days.</li>
          <li className="p-4"><span className="font-medium">Effective for Treatment-Resistant Depression:</span> Helps individuals who have not responded to other medications.</li>
          <li className="p-4"><span className="font-medium">Supervised Administration:</span> Delivered in a controlled clinical setting to ensure safety.</li>
        </ul>
      
        <h2 className="font-medium text-3xl py-4">What to Expect During Treatment</h2>
        <ul className="list-decimal px-8">
          <li className="p-4"><span className="font-medium">Initial Evaluation:</span> A mental health professional will assess if Spravato is right for you.</li>
          <li className="p-4"><span className="font-medium">Supervised Sessions:</span> Spravato is administered in a clinic, where patients are monitored for two hours post-treatment.</li>
          <li className="p-4"><span className="font-medium">Ongoing Support:</span> Treatment typically includes multiple sessions over weeks or months, combined with therapy or medication.</li>
        </ul>
      
        <h2 className="font-medium text-3xl py-4">Safety & Side Effects</h2>
        <p className="py-3">Possible side effects include dizziness, nausea, dissociation, or increased blood pressure. It is only available through certified treatment centers under medical supervision.</p>
      
        <p className="py-3 font-medium text-xl text-center">If you or a loved one are struggling with treatment-resistant depression, Spravato therapy may be an option. Consult a mental health professional to learn more. 💙</p>
      </div>
      )
  },{
    id:"RelaxationTherapy",
    title:"Relaxation Therapy",
    content:(<div className="scrollable">
        <p className="py-3">
          Relaxation therapy is a holistic approach designed to reduce stress, anxiety, and tension by promoting physical and mental relaxation. It includes various techniques that help individuals achieve a calm state, improving overall well-being.
        </p>
      
        <h2 className="font-medium text-3xl py-4">Benefits of Relaxation Therapy</h2>
        <ul className="list-disc px-8">
          <li className="p-4"><span className="font-medium">Reduces Stress:</span> Helps lower cortisol levels and manage stress effectively.</li>
          <li className="p-4"><span className="font-medium">Improves Sleep:</span> Enhances sleep quality by promoting a peaceful mind.</li>
          <li className="p-4"><span className="font-medium">Boosts Emotional Well-Being:</span> Supports mental clarity, focus, and emotional balance.</li>
          <li className="p-4"><span className="font-medium">Enhances Physical Health:</span> Lowers blood pressure, improves heart health, and reduces muscle tension.</li>
        </ul>
      
        <h2 className="font-medium text-3xl py-4">Types of Relaxation Therapy</h2>
        <ul className="list-decimal px-8">
          <li className="p-4"><span className="font-medium">Deep Breathing Exercises:</span> Focused breathing techniques to calm the nervous system.</li>
          <li className="p-4"><span className="font-medium">Progressive Muscle Relaxation (PMR):</span> Tensing and relaxing different muscle groups to relieve stress.</li>
          <li className="p-4"><span className="font-medium">Guided Imagery:</span> Using visualization techniques to create a sense of peace and relaxation.</li>
          <li className="p-4"><span className="font-medium">Meditation & Mindfulness:</span> Encourages awareness of the present moment to reduce anxiety.</li>
          <li className="p-4"><span className="font-medium">Aromatherapy:</span> The use of essential oils to enhance relaxation and mood.</li>
          <li className="p-4"><span className="font-medium">Yoga & Tai Chi:</span> Combining movement, breathing, and meditation to improve relaxation.</li>
        </ul>
      
        <h2 className="font-medium text-3xl py-4">Who Can Benefit from Relaxation Therapy?</h2>
        <p className="py-3">Relaxation therapy is beneficial for individuals experiencing:</p>
        <ul className="list-disc px-8">
          <li className="p-4">Chronic stress and anxiety</li>
          <li className="p-4">Sleep disturbances or insomnia</li>
          <li className="p-4">Muscle tension and physical pain</li>
          <li className="p-4">High blood pressure or heart-related concerns</li>
          <li className="p-4">Emotional exhaustion or burnout</li>
        </ul>
      
        <h2 className="font-medium text-3xl py-4">How to Incorporate Relaxation Therapy into Daily Life</h2>
        <p className="py-3">Practicing relaxation techniques for just a few minutes daily can lead to significant improvements in mental and physical health.</p>
        <ul className="list-disc px-8">
          <li className="p-4">Set aside time for deep breathing or meditation.</li>
          <li className="p-4">Create a calming bedtime routine to enhance sleep.</li>
          <li className="p-4">Use aromatherapy with lavender or chamomile essential oils.</li>
          <li className="p-4">Engage in regular yoga, stretching, or tai chi.</li>
          <li className="p-4">Listen to calming music or nature sounds.</li>
        </ul>
      
        <p className="py-3 font-medium text-xl text-center">Relaxation therapy is a powerful tool for achieving a balanced, stress-free life. Start small and make relaxation a part of your daily routine. 💙</p>
      </div>
      )
  },{
    id:"SarvatoTherapy",
    title:"Sarvato_Therapy",
    content:(<div className="scrollable">
        <p className="py-3">
          Sarvato Therapy is a holistic mental health approach that integrates multiple therapeutic techniques to enhance emotional well-being, reduce stress, and promote overall mental clarity. This therapy is designed to address various psychological and emotional concerns through a combination of personalized strategies.
        </p>
      
        <h2 className="font-medium text-3xl py-4">Benefits of Sarvato Therapy</h2>
        <ul className="list-disc px-8">
          <li className="p-4"><span className="font-medium">Comprehensive Healing:</span> Incorporates multiple therapy techniques for a well-rounded approach.</li>
          <li className="p-4"><span className="font-medium">Emotional Balance:</span> Helps in managing anxiety, stress, and emotional instability.</li>
          <li className="p-4"><span className="font-medium">Personalized Treatment:</span> Adapted to each individual’s unique mental health needs.</li>
          <li className="p-4"><span className="font-medium">Mind-Body Connection:</span> Encourages harmony between mental and physical well-being.</li>
        </ul>
      
        <h2 className="font-medium text-3xl py-4">Techniques Used in Sarvato Therapy</h2>
        <ul className="list-decimal px-8">
          <li className="p-4"><span className="font-medium">Cognitive Restructuring:</span> Identifying and modifying negative thought patterns.</li>
          <li className="p-4"><span className="font-medium">Mindfulness Meditation:</span> Enhancing awareness and focus on the present moment.</li>
          <li className="p-4"><span className="font-medium">Energy Healing Practices:</span> Techniques like Reiki or chakra balancing for emotional well-being.</li>
          <li className="p-4"><span className="font-medium">Expressive Therapies:</span> Art, music, and movement therapy to encourage self-expression.</li>
          <li className="p-4"><span className="font-medium">Breathwork & Relaxation:</span> Deep breathing techniques for stress management.</li>
        </ul>
      
        <h2 className="font-medium text-3xl py-4">Who Can Benefit from Sarvato Therapy?</h2>
        <p className="py-3">This therapy is beneficial for individuals struggling with:</p>
        <ul className="list-disc px-8">
          <li className="p-4">Chronic stress and emotional fatigue</li>
          <li className="p-4">Anxiety and depression</li>
          <li className="p-4">Lack of focus and clarity</li>
          <li className="p-4">Emotional trauma and past wounds</li>
          <li className="p-4">Desire for holistic self-improvement</li>
        </ul>
      
        <h2 className="font-medium text-3xl py-4">Integrating Sarvato Therapy into Daily Life</h2>
        <p className="py-3">Incorporating small practices from Sarvato Therapy can help in maintaining mental clarity and emotional balance.</p>
        <ul className="list-disc px-8">
          <li className="p-4">Practice daily mindfulness and meditation.</li>
          <li className="p-4">Engage in creative activities like journaling or painting.</li>
          <li className="p-4">Use deep breathing exercises to reduce stress.</li>
          <li className="p-4">Explore energy-balancing techniques for mental harmony.</li>
        </ul>
      
        <p className="py-3 font-medium text-xl text-center">
          Sarvato Therapy offers a unique and personalized path to emotional well-being and inner peace. 💙
        </p>
      </div>
      )
  }
];

export default function Services() {
    const [searchParams] = useSearchParams();
    const linkValue = searchParams.get("ID"); // Get the value of 'Link'
  
    
  console.log(linkValue);
    const [selectedSection, setSelectedSection] = useState(sections[0]);
  
    // Use effect to update the selected section based on linkValue
    useEffect(() => {
        if (linkValue && sections.length > 0) { 
          const foundSection = sections.find(
            (section) => section.id === linkValue
          );
      
          console.log("Link Value:", linkValue); // Debugging
          console.log("Found Section:", foundSection); // Debugging
      
          if (foundSection) {
            setSelectedSection(foundSection);
          }
        }
      }, [linkValue, sections]); // Depend on both linkValue & sections
      
    return (
      <div className="flex h-screen overflow-y-scroll scrollbar-hidden  bg-gradient-to-bl from-rose-100 via-gray-100 to-gray-200">
        {/* Sidebar */}

        <nav className="w-1/4 bg-gray-500  text-white p-4">
          <h2 className="text-xl font-bold mb-4">Mental Health Issues & Therapies</h2>
          <ul>
            {sections.map((section) => (
              <li
                key={section.id}
                className={`p-2 cursor-pointer rounded  ${
                  selectedSection.id === section.id ? "bg-white text-black" :  "hover:bg-white hover:text-black"
                }`}
                onClick={() => setSelectedSection(section)}
              >
                {section.title}
              </li>
            ))}
          </ul>
        </nav>
  
        {/* Main Content */}
        <main className="w-3/4 p-6 h-screen overflow-y-scroll scrollbar-hidden border border-gray-300">
          <h1 className="text-5xl font-semibold mb-4">{selectedSection.title}</h1>
          <div className="text-xl">{selectedSection.content}</div>
        </main>
      </div>)}