import React from 'react';
import Project_Container from './projects_container';

export default function Projects() {
    return (
        <div className='projects'>
            <h1 className='sections_h1'>Projects</h1>
            <Project_Container
                projectName="brandon-mchugh.com"
                github="https://github.com/brandmch/brandon-mchugh.com"
                date="May 2022 - Present"
                description="Personal website developed in React and deployed through Amazon Web Services."
                organization="Self"
            />
            <Project_Container
                projectName="WorkoutTracker"
                github="https://github.com/brandmch/WorkoutTracker"
                date="Mar 2022 - Present"
                description="An Android application designed and engineered in Android Studio using Java, SQLite, and xml. 
                Currently available on the Google Play store. WorkoutTracker is a quick and easy way to record each set you perform during your workouts, day by day, to keep track of your progress!"
                organization="Self"
            />
            <Project_Container
                projectName="Determining Correlations Between Academic Stress, Parental Pressure, Procrastination, and Stimulant Use using Latent Class Analysis"
                date="Sep 2018 - Apr 2019"
                description="Investigated possible predictors of licit stimulant use in undergraduate students. Using Latent Class Analysis and self-report questionnaires from over two-hundred students, research concluded that procrastination, parental pressure, and academic stress were possible predictors of licit stimulant use. "
                organization="Rowan University"
            />

        </div>
    )
}