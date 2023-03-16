import React, { useState } from "react";
import "./App.css";
import region from './/Region.jpg';

function getText() {
  const quadrants = [
    ['Upper Left Quadrant:',
      ['Pain level 1: Mild indigestion, gas, or constipation'],
      ['Pain level 2: Acid reflux or heartburn, gastritis, or mild liver inflammation'],
      ['Pain level 3: Stomach ulcer, pancreatitis, or hepatitis'],
      ['Pain level 4: Kidney stone or liver abscess'],
      ['Pain level 5: Spleen rupture, splenic infarction, or stomach cancer']],
      
    ['Upper Middle Quadrant:',
      ['Pain level 1: Mild acid reflux or heartburn, bloating, or constipation'],
      ['Pain level 2: Hiatal hernia or mild gastric ulcer'],
      ['Pain level 3: Gastric ulcer, pancreatitis, or cholecystitis'],
      ['Pain level 4: Gallstones or liver disease'],
      ['Pain level 5: Pancreatic cancer or gastric cancer']],

    ['Upper Right Quadrant:',
      ['Pain level 1: Mild indigestion, gas, or constipation'],
      ['Pain level 2: Acid reflux or heartburn, mild liver inflammation, or gallbladder inflammation'],
      ['Pain level 3: Cholecystitis, gallstones, or liver cirrhosis'],
      ['Pain level 4: Liver abscess or pancreatic cancer'],
      ['Pain level 5: Liver cancer or bile duct obstruction']],

    ['Middle Left Quadrant:',
      ['Pain level 1: Mild gas, bloating, or constipation'],
      ['Pain level 2: Irritable bowel syndrome or mild diverticulitis'],
      ['Pain level 3: Diverticulitis, ulcerative colitis, or Crohn\'s disease'],
      ['Pain level 4: Colon cancer or splenic flexure syndrome'],
      ['Pain level 5: Mesenteric ischemia or aortic aneurysm']],

    ['Middle Quadrant:',
      ['Pain level 1: Mild gas, bloating, or constipation'],
      ['Pain level 2: Irritable bowel syndrome or mild diverticulitis'],
      ['Pain level 3: Diverticulitis, ulcerative colitis, or Crohn\'s disease'],
      ['Pain level 4: Colon cancer or splenic flexure syndrome'],
      ['Pain level 5: Mesenteric ischemia or aortic aneurysm']],

    ['Middle Right Quadrant:',
      ['Pain level 1: Mild gas, bloating, or constipation'],
      ['Pain level 2: Irritable bowel syndrome or mild appendicitis'],
      ['Pain level 3: Appendicitis or inflammatory bowel disease'],
      ['Pain level 4: Right-sided colon cancer or cecal volvulus'],
      ['Pain level 5: Small bowel obstruction or mesenteric ischemia']],

    ['Lower Left Quadrant:',  ['Pain level 1: Mild gas, bloating, or constipation'],
      ['Pain level 2: Irritable bowel syndrome or mild diverticulitis'],
      ['Pain level 3: Diverticulitis, ulcerative colitis, or Crohn\'s disease'],
      ['Pain level 4: Ovarian cyst or tubo-ovarian abscess'],
      ['Pain level 5: Ovarian torsion or ectopic pregnancy']],

    ['Lower Middle Quadrant:',  ['Pain level 1: Mild gas, bloating, or constipation'],
      ['Pain level 2: Irritable bowel syndrome or menstrual cramps'],
      ['Pain level 3: Ovarian cyst or endometriosis'],
      ['Pain level 4: Ectopic pregnancy or tubo-ovarian abscess'],
      ['Pain level 5: Pelvic inflammatory disease or ovarian torsion']],

    ['Lower Right Quadrant:',  ['Pain level 1: Mild gas, bloating, or constipation'],
      ['Pain level 2: Irritable bowel syndrome or mild appendicitis'],
      ['Pain level 3: Appendicitis or inflammatory bowel disease'],
      ['Pain level 4: Right-sided colon cancer or cecal volvulus'],
      ['Pain level 5: Small bowel obstruction or mesenteric ischemia']]]
  return quadrants;
}


function App() {
  const [painLevel1, setPainLevel1] = useState("");
  const [painLevel2, setPainLevel2] = useState("");
  const [painLevel3, setPainLevel3] = useState("");
  const [painLevel4, setPainLevel4] = useState("");
  const [painLevel5, setPainLevel5] = useState("");
  const [painLevel6, setPainLevel6] = useState("");
  const [painLevel7, setPainLevel7] = useState("");
  const [painLevel8, setPainLevel8] = useState("");
  const [painLevel9, setPainLevel9] = useState("");

  const [boxContent1, setBoxContent1] = useState(
    <div>
      <h2>Upper left quadrant</h2>
      <ul>
        <li>Liver</li>
        <li>Stomach</li>
        <li>Pancreas</li>
      </ul>
    </div>
  );

  const [boxContent2, setBoxContent2] = useState(
    <div>
      <h2>Upper middle quadrant</h2>
        <ul>
          <li>Small intestine</li>
          <li>Appendix</li>
        </ul>
    </div>
  );

  const [boxContent3, setBoxContent3] = useState(
    <div>
      <h2>Upper right quadrant</h2>
      <ul>
        <li>Gallbladder</li>
        <li>Right kidney</li>
        <li>Liver</li>
      </ul>
    </div>
  );

  const [boxContent4, setBoxContent4] = useState(
    <div>
      <h2>Middle left quadrant</h2>
      <ul>
        <li>Left kidney</li>
        <li>Spleen</li>
        <li>Pancreas</li>
      </ul>
    </div>
  );

  const [boxContent5, setBoxContent5] = useState(
    <div>
      <h2>Middle middle quadrant</h2>
      <ul>
        <li>Bladder</li>
        <li>Reproductive organs</li>
      </ul>
    </div>
  );

  const [boxContent6, setBoxContent6] = useState(
    <div>
      <h2>Middle right quadrant</h2>
      <ul>
        <li>Appendix</li>
        <li>Ascending colon</li>
      </ul>
    </div>
  );

  const [boxContent7, setBoxContent7] = useState(
    <div>
      <h2>Lower left quadrant</h2>
      <ul>
        <li>Descending colon</li>
        <li>Left ovary or testis</li>
      </ul>
    </div>
  );

  const [boxContent8, setBoxContent8] = useState(
    <div>
      <h2>Lower middle quadrant</h2>
      <ul>
        <li>Bladder</li>
        <li>Uterus</li>
        <li>Prostate</li>
      </ul>
    </div>
  );

  const [boxContent9, setBoxContent9] = useState(
    <div>
      <h2>Lower right quadrant</h2>
      <ul>
        <li>Appendix</li>
        <li>Cecum</li>
        <li>Right ovary or testis</li>
      </ul>
    </div>
  );


  // Handle pain level change according to user input
  const handlePainLevelChange1 = (e) => {
    setPainLevel1(e.target.value);

    switch (e.target.value) {
      case "1":
        setBoxContent1(
          <div>
            <h2>Upper left quadrant</h2>
            <ul>
              <li>{getText()[0][1]}</li>
            </ul>
          </div>
        );
        break;
      case "2":
        setBoxContent1(
          <div>
            <h2>Upper left quadrant</h2>
            <ul>
              <li>{getText()[0][2]}</li>
            </ul>
          </div>
        );
        break;
      case "3":
        setBoxContent1(
          <div>
            <h2>Upper left quadrant</h2>
            <ul>
              <li>{getText()[0][3]}</li>
            </ul>
          </div>
        );
        break;
      case "4":
        setBoxContent1(
          <div>
            <h2>Upper left quadrant</h2>
            <ul>
              <li>{getText()[0][4]}</li>
            </ul>
          </div>
        );
        break;
      case "5":
        setBoxContent1(
          <div>
            <h2>Upper left quadrant</h2>
            <ul>
              <li>{getText()[0][5]}</li>
            </ul>
          </div>
        );
        break;
      default:
        setBoxContent1(
          <div>
            <h2>Upper left quadrant</h2>
            <ul>
              <li>Liver</li>
              <li>Stomach</li>
              <li>Pancreas</li>
            </ul>
          </div>
        );
        break;
    }
  };


  const handlePainLevelChange2 = (e) => {
    setPainLevel2(e.target.value);

    switch (e.target.value) {
      case "1":
        setBoxContent2(
          <div>
            <h2>Upper middle quadrant</h2>
            <ul>
              <li>{getText()[1][1]}</li>
            </ul>
          </div>
        );
        break;
      case "2":
        setBoxContent2(
          <div>
            <h2>Upper middle quadrant</h2>
            <ul>
            <li>{getText()[1][2]}</li>
            </ul>
          </div>
        );
        break;
      case "3":
        setBoxContent2(
          <div>
            <h2>Upper middle quadrant</h2>
            <ul>
            <li>{getText()[1][3]}</li>
            </ul>
          </div>
        );
        break;
      case "4":
        setBoxContent2(
          <div>
            <h2>Upper middle quadrant</h2>
            <ul>
              <li>{getText()[1][4]}</li>
            </ul>
          </div>
        );
        break;
      case "5":
        setBoxContent2(
          <div>
            <h2>Upper middle quadrant</h2>
            <ul>
              <li>{getText()[1][5]}</li>
            </ul>
          </div>
        );
        break;
      default:
        setBoxContent2(
          <div>
            <h2>Upper middle quadrant</h2>
              <ul>
                <li>Small intestine</li>
                <li>Appendix</li>
              </ul>
          </div>
        );
        break;
    }
  };

  const handlePainLevelChange3 = (e) => {
    setPainLevel3(e.target.value);

    switch (e.target.value) {
      case "1":
        setBoxContent3(
          <div>
            <h2>Upper right quadrant</h2>
            <ul>
              <li>{getText()[2][1]}</li>
            </ul>
          </div>
        );
        break;
      case "2":
        setBoxContent3(
          <div>
            <h2>Upper right quadrant</h2>
            <ul>
              <li>{getText()[2][2]}</li>
            </ul>
          </div>
        );
        break;
      case "3":
        setBoxContent3(
          <div>
            <h2>Upper right quadrant</h2>
            <ul>
              <li>{getText()[2][3]}</li>
            </ul>
          </div>
        );
        break;
      case "4":
        setBoxContent3(
          <div>
            <h2>Upper right quadrant</h2>
            <ul>
              <li>{getText()[2][4]}</li>
            </ul>
          </div>
        );
        break;
      case "5":
        setBoxContent3(
          <div>
            <h2>Upper right quadrant</h2>
            <ul>
              <li>{getText()[2][5]}</li>
            </ul>
          </div>
        );
        break;
      default:
        setBoxContent3(
          <div>
            <h2>Upper right quadrant</h2>
            <ul>
              <li>Gallbladder</li>
              <li>Right kidney</li>
              <li>Liver</li>
            </ul>
          </div>
        );
        break;
    }
  };

  const handlePainLevelChange7 = (e) => {
    setPainLevel7(e.target.value);

    switch (e.target.value) {
      case "1":
        setBoxContent7(
          <div>
            <h2>Upper right quadrant</h2>
            <ul>
              <li>{getText()[6][1]}</li>
            </ul>
          </div>
        );
        break;
      case "2":
        setBoxContent7(
          <div>
            <h2>Upper right quadrant</h2>
            <ul>
              <li>{getText()[6][2]}</li>
            </ul>
          </div>
        );
        break;
      case "3":
        setBoxContent7(
          <div>
            <h2>Upper right quadrant</h2>
            <ul>
              <li>{getText()[6][3]}</li>
            </ul>
          </div>
        );
        break;
      case "4":
        setBoxContent7(
          <div>
            <h2>Upper right quadrant</h2>
            <ul>
              <li>{getText()[6][4]}</li>
            </ul>
          </div>
        );
        break;
      case "5":
        setBoxContent7(
          <div>
            <h2>Upper right quadrant</h2>
            <ul>
              <li>{getText()[6][5]}</li>
            </ul>
          </div>
        );
        break;
      default:
        setBoxContent7(
          <div>
            <h2>Lower left quadrant</h2>
            <ul>
              <li>Descending colon</li>
              <li>Left ovary or testis</li>
            </ul>
          </div>
        );
        break;
    }
  };

  const handlePainLevelChange8 = (e) => {
    setPainLevel8(e.target.value);

    switch (e.target.value) {
      case "1":
        setBoxContent8(
          <div>
            <h2>Upper right quadrant</h2>
            <ul>
              <li>{getText()[7][1]}</li>
            </ul>
          </div>
        );
        break;
      case "2":
        setBoxContent8(
          <div>
            <h2>Upper right quadrant</h2>
            <ul>
              <li>{getText()[7][2]}</li>
            </ul>
          </div>
        );
        break;
      case "3":
        setBoxContent8(
          <div>
            <h2>Upper right quadrant</h2>
            <ul>
              <li>{getText()[7][3]}</li>
            </ul>
          </div>
        );
        break;
      case "4":
        setBoxContent8(
          <div>
            <h2>Upper right quadrant</h2>
            <ul>
              <li>{getText()[7][4]}</li>
            </ul>
          </div>
        );
        break;
      case "5":
        setBoxContent8(
          <div>
            <h2>Upper right quadrant</h2>
            <ul>
              <li>{getText()[7][5]}</li>
            </ul>
          </div>
        );
        break;
      default:
        setBoxContent8(
          <div>
            <h2>Lower middle quadrant</h2>
            <ul>
              <li>Bladder</li>
              <li>Uterus</li>
              <li>Prostate</li>
            </ul>
          </div>
        );
        break;
    }
  };

  const handlePainLevelChange9 = (e) => {
    setPainLevel9(e.target.value);

    switch (e.target.value) {
      case "1":
        setBoxContent9(
          <div>
            <h2>Upper right quadrant</h2>
            <ul>
              <li>{getText()[8][1]}</li>
            </ul>
          </div>
        );
        break;
      case "2":
        setBoxContent9(
          <div>
            <h2>Upper right quadrant</h2>
            <ul>
              <li>{getText()[8][2]}</li>
            </ul>
          </div>
        );
        break;
      case "3":
        setBoxContent9(
          <div>
            <h2>Upper right quadrant</h2>
            <ul>
              <li>{getText()[8][3]}</li>
            </ul>
          </div>
        );
        break;
      case "4":
        setBoxContent9(
          <div>
            <h2>Upper right quadrant</h2>
            <ul>
              <li>{getText()[8][4]}</li>
            </ul>
          </div>
        );
        break;
      case "5":
        setBoxContent9(
          <div>
            <h2>Upper right quadrant</h2>
            <ul>
              <li>{getText()[8][5]}</li>
            </ul>
          </div>
        );
        break;
      default:
        setBoxContent9(
          <div>
            <h2>Lower right quadrant</h2>
            <ul>
              <li>Appendix</li>
              <li>Cecum</li>
              <li>Right ovary or testis</li>
            </ul>
          </div>
        );
        break;
    }
  };

  const handlePainLevelChange4 = (e) => {
    setPainLevel4(e.target.value);

    switch (e.target.value) {
      case "1":
        setBoxContent4(
          <div>
            <h2>Middle right quadrant</h2>
            <ul>
              <li>{getText()[3][1]}</li>
            </ul>
          </div>
        );
        break;
      case "2":
        setBoxContent4(
          <div>
            <h2>Middle right quadrant</h2>
            <ul>
              <li>{getText()[3][2]}</li>
            </ul>
          </div>
        );
        break;
      case "3":
        setBoxContent4(
          <div>
            <h2>Middle right quadrant</h2>
            <ul>
              <li>{getText()[3][3]}</li>
            </ul>
          </div>
        );
        break;
      case "4":
        setBoxContent4(
          <div>
            <h2>Middle right quadrant</h2>
            <ul>
              <li>{getText()[3][4]}</li>
            </ul>
          </div>
        );
        break;
      case "5":
        setBoxContent4(
          <div>
            <h2>Middle right quadrant</h2>
            <ul>
              <li>{getText()[3][5]}</li>
            </ul>
          </div>
        );
        break;
      default:
        setBoxContent4(
          <div>
            <h2>Middle left quadrant</h2>
            <ul>
              <li>Left kidney</li>
              <li>Spleen</li>
              <li>Pancreas</li>
            </ul>
          </div>
        );
        break;
    }
  };

  const handlePainLevelChange5 = (e) => {
    setPainLevel5(e.target.value);

    switch (e.target.value) {
      case "1":
        setBoxContent5(
          <div>
            <h2>Middle middle quadrant</h2>
            <ul>
              <li>{getText()[4][1]}</li>
            </ul>
          </div>
        );
        break;
      case "2":
        setBoxContent5(
          <div>
            <h2>Middle middle quadrant</h2>
            <ul>
              <li>{getText()[4][2]}</li>
            </ul>
          </div>
        );
        break;
      case "3":
        setBoxContent5(
          <div>
            <h2>Middle middle quadrant</h2>
            <ul>
              <li>{getText()[4][3]}</li>
            </ul>
          </div>
        );
        break;
      case "4":
        setBoxContent5(
          <div>
            <h2>Middle middle quadrant</h2>
            <ul>
              <li>{getText()[4][4]}</li>
            </ul>
          </div>
        );
        break;
      case "5":
        setBoxContent5(
          <div>
            <h2>Middle middle quadrant</h2>
            <ul>
              <li>{getText()[4][5]}</li>
            </ul>
          </div>
        );
        break;
      default:
        setBoxContent5(
          <div>
            <h2>Middle middle quadrant</h2>
            <ul>
              <li>Bladder</li>
              <li>Reproductive organs</li>
            </ul>
          </div>
        );
        break;
    }
  };

  const handlePainLevelChange6 = (e) => {
    setPainLevel6(e.target.value);

    switch (e.target.value) {
      case "1":
        setBoxContent6(
          <div>
            <h2>Middle right quadrant</h2>
            <ul>
              <li>{getText()[5][1]}</li>
            </ul>
          </div>
        );
        break;
      case "2":
        setBoxContent6(
          <div>
            <h2>Middle right quadrant</h2>
            <ul>
              <li>{getText()[5][2]}</li>
            </ul>
          </div>
        );
        break;
      case "3":
        setBoxContent6(
          <div>
            <h2>Middle right quadrant</h2>
            <ul>
              <li>{getText()[5][3]}</li>
            </ul>
          </div>
        );
        break;
      case "4":
        setBoxContent6(
          <div>
            <h2>Middle right quadrant</h2>
            <ul>
              <li>{getText()[5][4]}</li>
            </ul>
          </div>
        );
        break;
      case "5":
        setBoxContent6(
          <div>
            <h2>Middle right quadrant</h2>
            <ul>
              <li>{getText()[5][5]}</li>
            </ul>
          </div>
        );
        break;
      default:
        setBoxContent6(
          <div>
            <h2>Middle right quadrant</h2>
            <ul>
              <li>Appendix</li>
              <li>Ascending colon</li>
            </ul>
          </div>
        );
        break;
    }
  };


  return (
    <div>
      <h1 className="title">
        Click to see what might be happening to your abdomen
      </h1>
      <img src={region} alt="region" className="half-screen-image"/>
      <div className="container">
        <div className="box box1">
          <div className="box-content">
            {boxContent1}
            <p>Select pain level:</p>
            <select
              value={painLevel1}
              onChange={handlePainLevelChange1}
            >
              <option value="">Select level</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <div className="box box2">
          <div className="box-content">
          {boxContent2}
            <p>Select pain level:</p>
            <select
              value={painLevel2}
              onChange={handlePainLevelChange2}
            >
              <option value="">Select level</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>            
          </div>
        </div>
        <div className="box box3">
          <div className="box-content">
          {boxContent3}
            <p>Select pain level:</p>
            <select
              value={painLevel3}
              onChange={handlePainLevelChange3}
            >
              <option value="">Select level</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>   
          </div>
        </div>
        <div className="box box4">
          <div className="box-content">
          {boxContent4}
            <p>Select pain level:</p>
            <select
              value={painLevel4}
              onChange={handlePainLevelChange4}
            >
              <option value="">Select level</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>   
          </div>
        </div>
        <div className="box box5">
          <div className="box-content">
          {boxContent5}
            <p>Select pain level:</p>
            <select
              value={painLevel5}
              onChange={handlePainLevelChange5}
            >
              <option value="">Select level</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>   
          </div>
        </div>
        <div className="box box6">
          <div className="box-content">
          {boxContent6}
            <p>Select pain level:</p>
            <select
              value={painLevel6}
              onChange={handlePainLevelChange6}
            >
              <option value="">Select level</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>   
          </div>
        </div>
        <div className="box box7">
          <div className="box-content">
          {boxContent7}
            <p>Select pain level:</p>
            <select
              value={painLevel7}
              onChange={handlePainLevelChange7}
            >
              <option value="">Select level</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>   
          </div>
        </div>
        <div className="box box8">
          <div className="box-content">
          {boxContent8}
            <p>Select pain level:</p>
            <select
              value={painLevel8}
              onChange={handlePainLevelChange8}
            >
              <option value="">Select level</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>   
          </div>
        </div>
        <div className="box box9">
          <div className="box-content">
          {boxContent9}
            <p>Select pain level:</p>
            <select
              value={painLevel9}
              onChange={handlePainLevelChange9}
            >
              <option value="">Select level</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>   
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

