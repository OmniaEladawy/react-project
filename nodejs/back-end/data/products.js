const products = [
  {
      "name": "Nasal Oxygen Cannula",
      "image": "http://cdn.shopify.com/s/files/1/0045/4216/9201/products/72598bd3dd93dd99faba4b5283341fca_1200x1200.png?v=1571730897",
      "description": "The nasal cannula (NC) is a device used to deliver supplemental oxygen or increased airflow to a patient or person in need of respiratory help. This device consists of a lightweight tube which on one end splits into two prongs which are placed in the nostrils and from which a mixture of air and oxygen flows.",
      "category": "Respiratory",
      "price": 50,
      "countInStock": 20
  },
  {
      "name": "Oxygen Mask        ",
      "image": "https://cdn.salla.sa/lK2FDoOzNUDI3lmBKzvHm2dkKGEqt2KTx7I1Kubj.png",
      "description": "Oxygen mask is used in hospital for oxygen inhalation by patients. It can be used in ICU and surgery to provide oxygen for patient. The oxygen mask is widely used in the daily treatment of patients with respiratory system, especially those infected with COVID-19. It is made of non-toxic medical grade PVC material, equipped with a 2m oxygen tube, and the length of the oxygen tube can be customized.        ",
      "category": "Respiratory",
      "price": 50,
      "countInStock": 20
  },
  {
      "name": "Non-Rebreather Oxygen Mask        ",
      "image": "https://cdn.shopify.com/s/files/1/0550/0275/9337/products/RES2102_500x.jpg?v=1629901934",
      "description": "A non-rebreather mask is a medical device that helps deliver oxygen in emergency situations. It consists of a face mask connected to a reservoir bag that's filled with a high concentration of oxygen. A non-rebreather mask is used in emergency situations to prevent hypoxemia, also known as low blood oxygen.",
      "category": "Respiratory",
      "price": 50,
      "countInStock": 20
  },
  {
      "name": "Nebulizer Mask        ",
      "image": "https://www.oxyaider.co.za/wp-content/uploads/2020/05/PEDIATRIC-NEBULIZER-MASK-WITH-TUBING.jpg",
      "description": "The nebulizer mask is suitable for the atomization of the original medicine to improve the efficiency of the patient's medication. Our nebulizer/aerosol masks are available in a variety of styles, mask type, hand-held and cartoon type, suitable for both adults and children. Customization or OEM is acceptable.",
      "category": "Respiratory",
      "price": 50,
      "countInStock": 20
  },
  {
      "name": "Co2/02 Nasal Oxygen Cannula        ",
      "image": "https://sc04.alicdn.com/kf/H649ed9f97d23443cae63e388548f7ac41.jpg",
      "description": "Co2 Sampling Nasal Cannula is a soft, latex-free cannula with curved, tapered nasal prongs and dual tubing that has a unique CO2 sampling system. It is adult sized, soft, lightweight, has 7 ft tubing, a male luer lock connector, and an anesthesia circuit oxygen adapter.",
      "category": "Respiratory",
      "price": 50,
      "countInStock": 20
  },
  {
      "name": "Breathing Circuit-PVC/Silicone        ",
      "image": "https://www.evereastmedical.com/wp-content/uploads/2021/05/breathing-circuit.jpg",
      "description": "The breathing circuit forms a circuit between the gas output port of the breathing machine and the patient's respiratory tract, which is called an anesthetic breathing circuit. Through the anesthesia breathing circuit, fresh air and inhaled anesthetics are delivered to the patient's respiratory tract, and the patient's exhaled air is discharged outside the body.Our Anesthesia Breathing Circuit are available ina variety of styles,Corrugated,Expandable,Smoothbore,Coaxial, Duo Limbo type, suitable for both adults and children. Customization or OEM is acceptable.",
      "category": "Respiratory",
      "price": 50,
      "countInStock": 20
  },
  {
      "name": "PVC Anesthesia Mask        ",
      "image": "https://www.firstcaresolutions.com/uploadfile/201908/08/994088c65515459403d70061da8d91b8.jpg",
      "description": "Anesthesia mask is used in anesthesia and respiratory. The device can be connected with multiple medical equipment, such as anesthesia machines, ventilators, oxygen-machines, hyperbaric oxygen stores, inhaled painless delivery instruments, and emergency breathing apparatus.",
      "category": "Anesthesia        ",
      "price": 70,
      "countInStock": 30
  },
  {
      "name": "Silicone Anesthesia Mask        ",
      "image": "http://www.smd-medical.com/wp-content/uploads/2017/02/3-Silicone-Anesthesia-Mask.jpg",
      "description": "Silicone Anesthesia mask is used in anesthesia and respiratory. The device can be connected with multiple medical equipment, such as anesthesia machines, ventilators, oxygen-machines, hyperbaric oxygen stores, inhaled painless delivery instruments, and emergency breathing apparatus.",
      "category": "Anesthesia        ",
      "price": 70,
      "countInStock": 30
  },
  {
      "name": " Endotracheal Tube with Cuff        ",
      "image": "https://5.imimg.com/data5/AA/SH/MY-2981866/endotracheal-tube-cuff-500x500.png",
      "description": "Endotracheal Tube is a method of placing a special endotracheal catheter into the trachea or bronchus through the oral cavity or nasal cavity and through the glottis to provide the best conditions for the airway patence, ventilation and oxygen supply, and respiratory tract suction. It is an important measure to rescue patients with respiratory dysfunction.",
      "category": "Anesthesia        ",
      "price": 70,
      "countInStock": 30
  },
  {
      "name": "Endotracheal Tube without Cuff        ",
      "image": "https://d35cnulyv0pa6p.cloudfront.net/products/images/2017/26906/tracheal_tube_without_cuff.jpg?u8Er8Yw_5qEe2jOo2bmGO7l88avdYmRd=",
      "description":"Endotracheal Tube is a method of placing a special endotracheal catheter into the trachea or bronchus through the oral cavity or nasal cavity and through the glottis to provide the best conditions for the airway patence, ventilation and oxygen supply, and respiratory tract suction. It is an important measure to rescue patients with respiratory dysfunction.",
      "category": "Anesthesia        ",
      "price": 70,
      "countInStock": 30
  },
  {
      "name": "PVC Laryngeal Mask        ",
      "image": "https://www.oxyaider.co.za/wp-content/uploads/2021/11/laryngeal-mask-airway.jpeg",
      "description":"Laryngeal mask is used to be inserted through the mouth, up to the back of the throat, forms a seal at the top of the glottis in order to .",
      "category": "Anesthesia        ",
      "price": 70,
      "countInStock": 30
  },
  {
      "name": "Silicone Disposable Laryngeal Mask        ",
      "image": "https://image.made-in-china.com/44f3j00vOwDluFdPmcE/Disposable-Laryngeal-Mask-Airway-100-Silicone.jpg",
      "description":"Laryngeal mask is an effective method to establish safe airway in general anesthesia operation.",
      "category": "Anesthesia        ",
      "price": 70,
      "countInStock": 30
  },
  {
      "name": "Disposable Isolation Gown        ",
      "image": "https://amsp.africa/all_media/2021/04/%E4%B8%BB%E5%9B%BE-2.jpg",
      "description":"Disposable isolation gowns are made of non-woven fabrics by cutting, sewing or heat pressing. Non-sterile provided, single use, intended use: used for general isolation in outpatient clinics, wards, laboratories, etc. of medical institutions.",
      "category": " Non-Woven        ",
      "price": 90,
      "countInStock": 30
  },
  {
      "name": "Disposable Sterile Surgical Mask        ",
      "image": "https://m.media-amazon.com/images/I/61+jXYvt7wL.jpg",
      "description":"Disposable sterile surgical masks are used to wear on the mouth and nose of medical  staff in the operating room to prevent dander and respiratory microorganisms from spreading to open surgical wounds, and to prevent the spread of body fluids of surgical patients to medical staff, playing a bidirectional biological protection",
      "category": " Non-Woven        ",
      "price": 70,
      "countInStock": 30
  },
  {
      "name": "Non-woven shoe cover        ",
      "image": "https://wasip.com/wp-content/uploads/2014/12/C80500410-Pair.jpg",
      "description":"Mainly used in operating rooms, laboratories, food workshops, dust-proof workshops, beauty salons and other places, with anti-skid, dust-proof effects.",
      "category": " Non-Woven        ",
      "price": 70,
      "countInStock": 30
  },
  {
      "name": "Disposable Sterile Surgical Cap        ",
      "image": "https://img1.exportersindia.com/product_images/bc-full/2021/1/7918131/disposable-surgical-cap-with-tie-1611408687-5700404.jpeg",
      "description":"Used for isolation in outpatient clinics, wards, inspection rooms and other places of medical institutions.",
      "category": " Non-Woven        ",
      "price": 70,
      "countInStock": 30
  },
  {
      "name": "Disposable Sterile Surgical Gown",
      "image": "https://www.u-phten.com/Uploads/pro/5c1b3602f3d5e.jpg",
      "description":"Disposable sterile surgical gowns are mainly used to prevent the spread of infectious agents between patients and medical staff during surgical procedures and other invasive examinations, to achieve the purpose of isolating pathogenic bacteria or liquids that cause human infection.Made of four layer of fabric (SMMS) to provide high level of fluid repellency. The fabric features of two meltblown layers sandwiched between two strong, spunbond uterlayers. This gown gives you great wearing comfort with breathability.",
      "category": "Non-Woven",
      "price": 70,
      "countInStock": 30
  },
  {
      "name": "Disposable bed sheet        ",
      "image": "https://qasrelteb.com/wp-content/uploads/2021/04/disposable-bed-sheets-..jpg",
      "description":"It is widely used in beauty salons, foot bath shops, tourism, hospitals and other places. It has the characteristics of super soft ventilation, sweat absorption and moisture resistance, anti-allergic, etc.",
      "category": " Non-Woven        ",
      "price": 70,
      "countInStock": 30
  },
  {
      "name": "Disposable Foley catheter        ",
      "image": "https://p.globalsources.com/IMAGES/PDT/B5155022344/Medical-Foley-Catheter-2-way.jpg",
      "description":"The Latex Foley Catheter is flexible tubes that are passed through the urethra during urinary catheterization and into the bladder to drain urine, or for inserting fluids into the bladder.",
      "category": " Catheter ",
      "price": 100,
      "countInStock": 50
  },
  {
      "name": "Disposable Silicone Foley Catheter        ",
      "image": "https://jqrorwxhmiiqlq5p.leadongcdn.com/cloud/poBplKplRliSqkoiiplrj/640-Silicone-foley-catheter.jpg",
      "description":"The Silicone Foley Catheter is flexible tubes that are passed through the urethra during urinary catheterization and into the bladder to drain urine, or for inserting fluids into the bladder.",
      "category": " Catheter ",
      "price": 100,
      "countInStock": 50
  },
  {
      "name": "Connecting tubes with Yankauer Handle        ",
      "image": "https://image.made-in-china.com/202f0j00zuyfEmZjlbcF/Ce-ISO-Approved-Suction-Connecting-Tube-with-Yankauer-Handle.jpg",
      "description":"The Yankauer suction tip is an oral suctioning tool used in medical procedures. It is typically a firm plastic suction tip with a large opening surrounded by a bulbous head and is designed to allow effective suction without damaging surrounding tissue. This tool is used to suction oropharyngeal secretions in order to prevent aspiration. A Yankauer can also be used to clear operative sites during surgical procedures and its suctioned volume counted as blood loss during surgery.",
      "category": " Catheter ",
      "price": 100,
      "countInStock": 50
  },
  {
      "name": "Suction catheter",
      "image": "https://i0.wp.com/www.wessex-medical.com/wp-content/uploads/2015/10/Catheters.jpg?fit=3072%2C2048&ssl=1",
      "description":"Suction catheter is used for clinical sputum Suction.Consisting of tubes and  connectors, color coded connector for identification of different sizes.",
      "category": " Catheter ",
      "price": 100,
      "countInStock": 50
  },
  {
      "name": "Feeding Tube        ",
      "image": "https://5.imimg.com/data5/EF/DN/MY-2246628/romsons-infant-feeding-tube-500x500.png",
      "description":"The feeding tube consists of a tube and a joint. The material is made of PVC, and it can be divided into ten specifications according to different diameters of the tube.",
      "category": " Catheter ",
      "price": 100,
      "countInStock": 50
  },
  {
      "name": "Stomach Tube        ",
      "image": "https://5.imimg.com/data5/AK/KX/MY-13168396/stomach-tube-500x500.jpg",
      "description":"The Stomach Tube is used in special cases to provide the necessary water and food to patients who cannot swallow. It is usually made of PVC or silicone.",
      "category": " Catheter ",
      "price": 100,
      "countInStock": 50
  },
  {
      "name": "HMEF        ",
      "image": "https://static.gvs.com/product-collections/images/standard/202107261025-a3695b4b0d22ad84/4244-761.jpg",
      "description":"The full name of HMEF is Heat Moisture Exchange Filter. HMEF is composed of housing, filter membrane, humidity exchange material, Luer lock connector, Luer lock cap and non- threaded cap base. It is used to filter viruses and bacteria in the breathing circuit and maintain the temperature and humidity in the breathing circuit. The product is disposable and sterilized by ethylene oxide.",
      "category": " Accessory        ",
      "price": 90,
      "countInStock": 100
  },
  {
      "name": "BVF        ",
      "image": "https://5.imimg.com/data5/IH/SV/YE/SELLER-59601336/hme-bvf-filter-500x500.jpg",
      "description":"The full name of BVF is bacteria virus filter, it is used to filter viruses and bacteria in the breathing circuit. The Bacterial/Viral filter efficiency is more than 99.99%, it is disposable and sterilized by ethylene oxide.",
      "category": " Accessory        ",
      "price": 90,
      "countInStock": 100
  },
  {
      "name": "Breathing Bag",
      "image": "https://y9s5q4c4.stackpathcdn.com/wp-content/uploads/2021/07/qq_20180409154038-1.png",
      "description":"Breathing Bag is an accessory used with an anesthetic breathing circuit and is available in four sizes: 0.5L IL 2L 3L, latex and non-latex.",
      "category": " Accessory",
      "price": 90,
      "countInStock": 100
  },
  {
      "name": "Oxygen Tube        ",
      "image": "https://airoxcorp.com/wp-content/uploads/2021/01/3015e0ce-6d89-40b7-bf49-a4fa295d83e4.jpg",
      "description":"Oxygen tube is a clear supply tubing used to deliver therapeutic oxygen to a patients airways.",
      "category": " Accessory        ",
      "price": 90,
      "countInStock": 100
  },
  {
      "name": "Humidification Bottle        ",
      "image": "https://image.made-in-china.com/44f3j00WjdTVlsKSebi/200ml-Medical-Oxygen-Humidifier-Bottle.jpg",
      "description":"This disposable humidifier has a 6psi pop off audible safety alarm, large easy to grip quad style wind nut, easy flow dome lid design combined with a unique 360 degrees diffuser that helps to reduce rain-out. Easy jar to lid assembly with half turn positive seal with no gasket required, permanent maximum and minimum water level indicators will not wash, wear or rub off.",
      "category": " Accessory        ",
      "price": 90,
      "countInStock": 100
  },
  {
      "name": "Guedel Airway        ",
      "image": "https://www.megamedical.com.au/wp-content/uploads/2021/06/LR6300.png",
      "description":"The oropharyngeal airway is a non-invasive airway, which can prevent the tongue from falling behind and quickly open the airway to establish a temporary artificial airway.",
      "category": "Others        ",
      "price": 20,
      "countInStock": 150
  },
  {
      "name": "Berman Airway        ",
      "image": "https://www.avermed.com/v/vspfiles/photos/1-1508-2.jpg?v-cache=1361040041",
      "description":"The oropharyngeal airway is a non-invasive airway, which can prevent the tongue from falling behind and quickly open the airway to establish a temporary artificial airway.",
      "category": "Others        ",
      "price": 20,
      "countInStock": 150
  },
  {
      "name": "Disposable Infusion Sets        ",
      "image": "https://image.made-in-china.com/202f0j00sZfTUztJvhYi/Disposable-Infusion-Set.jpg",
      "description":"An infusion set is used with devices such as an insulin pump. The purpose of an infusion set is to deliver liquid medicine under the skin, fulfilling a similar function like an intravenous line. It is a complete tubing system to connect an insulin pump to the pump user and as such includes a subcutaneous cannula, adhesive mount, quick-disconnect, and a pump cartridge connector.",
      "category": "Others        ",
      "price": 20,
      "countInStock": 150
  },
  {
      "name": "I.V. Cannula        ",
      "image": "https://www.maisindia.com/wp-content/uploads/2020/09/MIASFLON.jpg",
      "description":"Used for clinical peripheral vascular system insertion, repeated infusion / blood transfusion, parenteral nutrition, emergency rescue, etc.",
      "category": "Others        ",
      "price": 20,
      "countInStock": 150
  },
  {
      "name": "Urine bag        ",
      "image": "https://cdn.shopify.com/s/files/1/0293/6432/2403/products/romsons-romsons-r-4-urine-bag-with-bottom-outlet-i46-402-db-1092-22998791782573.jpg?v=1623941156",
      "description":"Urine bag is used to collect urine from patients, mainly composed of drainage bag, drainage port, drainage tube, interface, divided into two sizes for people and children, and there are many types Without bottom outlet, push-pull valve,Screw valve,T valve.",
      "category": "Others        ",
      "price": 20,
      "countInStock": 150
  }
]
export default products