import { Outlet, Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div>
      <h1>About us</h1>
      <div style={{ display: "flex", columnGap: "2rem" }}>
        <ul>
          <li>
            <Link to="contacts">Our Contacts</Link>
          </li>
          <li>
            <Link to="team">Our Team</Link>
          </li>
        </ul>
        <Outlet />
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare vel
        risus a sagittis. Praesent id urna suscipit, congue lectus id,
        vestibulum mi. Donec eu orci non quam pretium gravida sed non purus.
        Cras mollis varius purus, eget convallis mi condimentum vel. Suspendisse
        eget interdum velit, sed tincidunt diam. Quisque consectetur nisl nisl,
        id ullamcorper mauris tempus quis. Aenean quis consequat risus, quis
        efficitur diam. Mauris volutpat nisl imperdiet, venenatis augue vel,
        mollis massa. Integer risus libero, rhoncus ut feugiat at, sodales in
        ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
        posuere cubilia curae; Nunc pretium neque auctor lorem malesuada
        porttitor. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Maecenas imperdiet augue ut ipsum
        imperdiet tempus. Nulla facilisi. Suspendisse mauris nisl, rhoncus id
        congue eu, luctus eget metus. Duis a quam a lorem venenatis facilisis
        vel eu leo. Donec gravida orci porta porttitor suscipit. Nulla egestas
        orci erat, nec sollicitudin magna ultricies at. Donec in mauris
        sollicitudin, tempus leo sit amet, rhoncus erat. Pellentesque sapien
        augue, efficitur ut finibus eu, porta id nulla. Morbi nec odio ornare,
        sagittis augue nec, ultricies purus. Duis a odio eget ligula finibus
        sodales cursus a ante. Vivamus in lacinia ligula. Proin ut quam id
        lectus consectetur maximus sed at neque. Morbi accumsan elementum arcu.
        Mauris faucibus imperdiet tincidunt. Cras sed magna sagittis, tincidunt
        est ut, volutpat nisi. Nam feugiat sed est in tincidunt. Nullam sagittis
        suscipit ligula sit amet ornare. Duis malesuada tellus egestas euismod
        auctor. Praesent laoreet nec est sed vehicula. Nullam ut magna ut lorem
        suscipit finibus. Quisque cursus ipsum ac magna tincidunt tincidunt.
        Pellentesque lorem lacus, auctor non viverra et, pharetra rhoncus risus.
        Proin vitae dolor elit. Nulla dapibus magna sit amet odio pharetra,
        sollicitudin rhoncus nisi vulputate. Donec sed vestibulum risus. Sed sit
        amet sodales nisl. Aliquam posuere luctus tellus, sit amet malesuada
        lorem commodo ut. Fusce sit amet semper urna. Nam ac enim sed urna
        pretium faucibus. Integer finibus porta nulla, vitae efficitur arcu
        maximus non. Aenean urna est, dignissim vel nunc sit amet, vulputate
        scelerisque leo. Morbi euismod ex a metus egestas, et vehicula nibh
        porta. Quisque laoreet leo at mollis vestibulum. Maecenas sodales massa
        nec lacus ultricies, at efficitur est finibus. Integer malesuada neque
        quis nibh luctus malesuada. Suspendisse felis dui, posuere at rutrum
        quis, sodales non nisi. Etiam pellentesque venenatis arcu, at aliquet
        nulla maximus nec. Fusce bibendum, magna a blandit sagittis, neque purus
        viverra ipsum, eu consequat enim nunc sit amet lorem. Integer tincidunt,
        neque et eleifend luctus, lacus lacus accumsan augue, et gravida massa
        metus et sapien. Etiam pretium tincidunt nisi, id vulputate erat
        tincidunt vitae. Nulla vulputate quam ut tortor eleifend scelerisque.
        Proin efficitur, arcu facilisis maximus dictum, quam lectus semper arcu,
        vel aliquet diam justo eget felis. Maecenas eget elit quis ante
        tincidunt commodo maximus non libero. Suspendisse mattis ultricies
        lacus, a suscipit nulla pharetra vel. Aenean ultrices auctor sagittis.
        Ut eget interdum erat, vel congue libero. Curabitur vel tortor eu felis
        convallis volutpat. Mauris dictum libero sed sapien rhoncus, vel aliquet
        nisl sodales. Quisque venenatis augue nec interdum efficitur. Donec
        malesuada libero eget suscipit fringilla. Nulla odio elit, mattis id
        sagittis at, tincidunt eu neque. Pellentesque mi ipsum, varius vitae
        finibus ac, facilisis ut magna. Integer vel enim arcu. Aenean ornare
        ipsum a lacus semper, ut hendrerit libero egestas. Quisque maximus leo
        eu vehicula congue. Nullam malesuada sed elit ac tempus. Aenean eget
        ullamcorper nibh, et volutpat felis. Cras sapien purus, imperdiet id
        sollicitudin eget, scelerisque vel velit. Curabitur sit amet mi sit amet
        erat consequat ultrices a vitae felis. In elementum ante diam, at
        gravida eros pretium eget. Pellentesque a dolor vitae mauris pharetra
        varius. Etiam in cursus nisi. Integer facilisis dolor id nisl luctus
        aliquam. Nunc felis velit, ultrices vel est quis, tristique placerat
        nisi. Nunc placerat, lectus eu accumsan ornare, erat justo molestie
        urna, sit amet elementum tellus nisi non purus. In tincidunt pulvinar
        eros nec pulvinar. Etiam non sagittis eros, a iaculis sem. Sed id quam
        interdum, mattis velit id, vulputate tortor. Curabitur vel commodo
        magna, vel dictum enim. Proin at nunc magna. Nulla facilisi. Morbi
        ultricies arcu ut purus fringilla dapibus. Morbi in metus id eros
        imperdiet gravida. Aliquam porta tincidunt sem, id placerat lacus cursus
        cursus. Pellentesque vitae turpis tortor. Aliquam erat volutpat.
        Phasellus quis mi convallis, cursus libero vel, ornare odio. Vestibulum
        a ante id tortor scelerisque consequat. Suspendisse pharetra hendrerit
        ex, id eleifend risus. Suspendisse potenti. Proin sed euismod ligula,
        lacinia eleifend metus. In sollicitudin, risus in ultrices laoreet,
        dolor arcu molestie erat, id eleifend odio nisi in velit. Suspendisse
        pulvinar nisl quis lacus blandit dignissim. Cras ultrices gravida nisi,
        vitae convallis magna. Sed mattis, ipsum nec semper consectetur, lorem
        enim tempus ligula, sed dignissim tellus libero nec nibh. Sed ac eros a
        ante semper congue. Mauris semper, elit nec mollis lobortis, nisi justo
        accumsan arcu, non dictum metus metus id nulla. Maecenas non dolor
        ultricies, posuere ante vitae, dictum turpis. Sed ac lacinia tellus, et
        venenatis diam. Phasellus hendrerit leo tempor, ornare mi quis, lobortis
        libero. Etiam condimentum nisi purus, sit amet fringilla nulla pulvinar
        ut. Vestibulum lobortis magna vitae dolor accumsan ultrices.
        Pellentesque vitae lacinia mi. Sed congue sed ex at placerat. In hac
        habitasse platea dictumst. Vivamus augue sem, euismod ornare sem id,
        porttitor dignissim sapien. Nunc aliquet, libero vitae pulvinar congue,
        purus sem tincidunt augue, sit amet efficitur erat nunc non ante.
        Suspendisse eget molestie orci, ut hendrerit orci. Maecenas consectetur
        ante lobortis orci pellentesque elementum. Mauris non risus nec sem
        dignissim venenatis. Vivamus dapibus mauris quis tellus dignissim
        iaculis. Sed non quam vitae sapien tristique sollicitudin. Maecenas
        feugiat felis ut nisi molestie sollicitudin. Duis a tellus eleifend,
        suscipit felis non, condimentum odio. Fusce finibus magna vel purus
        imperdiet, ut vestibulum enim finibus. Proin bibendum urna vel eros
        consectetur faucibus. Maecenas sit amet orci non dui ornare rutrum.
        Aenean et lorem eget neque vehicula vehicula quis et neque. Nulla
        pretium accumsan efficitur. Proin vulputate dui ex, quis ornare lectus
        congue sit amet. Ut id enim ligula. Praesent facilisis orci dolor, ac
        consequat nisi pharetra nec. Sed cursus odio commodo, sodales massa
        faucibus, viverra leo. Integer eget pretium mi, sit amet pulvinar orci.
        Cras ullamcorper erat a justo fermentum, et pulvinar leo hendrerit.
        Nullam lacinia lectus sed nulla eleifend, in finibus odio semper.
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Etiam neque velit, ullamcorper tincidunt felis
        congue, tempus ornare augue. Fusce sed ex a lorem dapibus rutrum
        vestibulum vitae mauris. Morbi eget arcu est. Fusce quis sapien
        malesuada, aliquet justo sit amet, vehicula quam. Interdum et malesuada
        fames ac ante ipsum primis in faucibus. Nam vitae ipsum vestibulum dui
        auctor luctus vitae ut tellus. Donec feugiat diam nisi, eu iaculis sem
        vulputate a. In hac habitasse platea dictumst. Nam auctor velit dictum
        pulvinar commodo. Nullam ullamcorper porta mauris, at pellentesque lorem
        consectetur in. Maecenas massa ipsum, fringilla in facilisis at,
        volutpat eu magna. Proin ac commodo quam. Pellentesque sed urna id nunc
        ultrices volutpat. Quisque et nibh sollicitudin, vehicula mi sed,
        egestas sem. Nam orci purus, viverra at lobortis eu, sodales quis
        tellus. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Nulla diam eros, commodo ac dolor non,
        vehicula varius erat. Nam dictum interdum purus eu ultrices. Aliquam
        erat volutpat. Nam odio tortor, semper nec ligula a, aliquet blandit
        velit. Morbi ante justo, malesuada sed hendrerit ac, euismod et neque.
        Praesent id augue sit amet leo venenatis dictum. Sed eleifend hendrerit
        dui, venenatis accumsan diam maximus non. Maecenas in magna vehicula
        urna convallis aliquam id eu elit. Nam bibendum ac orci sed pretium.
        Duis leo justo, semper non dolor quis, ullamcorper pulvinar nisi. Mauris
        at mauris sit amet erat suscipit tincidunt. Morbi fringilla iaculis
        mollis. Cras ut hendrerit purus. Etiam pretium leo urna, eu accumsan
        lectus lobortis in. Praesent viverra magna a enim convallis, at lacinia
        eros lobortis. Nullam nec ipsum nunc. Fusce sagittis mauris orci.
        Vestibulum nunc augue, fringilla nec euismod ut, fringilla id sem.
        Quisque non vehicula neque. In hac habitasse platea dictumst. Fusce
        lacinia felis eu diam molestie, nec elementum nulla tincidunt. Phasellus
        aliquet mollis risus, at fermentum diam auctor ut. Donec bibendum
        faucibus purus, sed condimentum dui dapibus non. Pellentesque id aliquet
        risus. Nullam maximus mauris id leo suscipit, nec porttitor neque
        laoreet. Suspendisse non commodo purus. Proin egestas, libero sed
        interdum laoreet, leo enim fringilla orci, ut congue felis neque id
        ipsum. Suspendisse dapibus libero nec ultrices blandit. In et lectus
        turpis. Fusce egestas auctor convallis. Donec varius est vitae nunc
        ultrices, vitae vulputate ex ultricies. Nulla blandit, enim ut semper
        facilisis, felis felis maximus nisi, sit amet tempus eros neque sit amet
        mauris. Quisque eget vestibulum elit. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Suspendisse volutpat rutrum iaculis. Nam
        euismod purus quis turpis interdum, eu mattis nisi dictum. Pellentesque
        euismod finibus nibh non rhoncus. Nulla a metus sem. Aliquam sodales
        malesuada dictum. Curabitur enim enim, ultrices vitae nulla sed,
        dignissim interdum diam. Morbi a mi feugiat velit sollicitudin ultrices
        in vel massa. Nam pellentesque elit vitae lorem interdum ultricies. Nunc
        egestas magna at leo condimentum pretium. Nullam elementum rhoncus leo,
        tempus feugiat arcu accumsan id. Quisque mollis congue laoreet. Integer
        luctus vitae mi et dignissim. Donec pharetra, sem non semper fringilla,
        mi nisl scelerisque lorem, et egestas justo arcu eu nisl. Donec gravida
        nisi sit amet nisl pulvinar luctus. Sed accumsan odio justo, fringilla
        facilisis massa commodo sit amet. Ut pharetra arcu purus. Vestibulum a
        iaculis velit. Ut et sollicitudin nibh, eu tristique velit. In a lectus
        vel erat porta fermentum vel eget ex. Ut mauris nisl, egestas quis
        ultricies vitae, pulvinar at arcu. Pellentesque sit amet ullamcorper
        lacus. Aliquam tincidunt scelerisque erat ut vehicula. Ut dui ipsum,
        lacinia vel turpis non, consequat vulputate tellus. Praesent non est non
        justo aliquam vehicula. Fusce laoreet est in tellus venenatis finibus.
        Curabitur at ultrices mauris. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Aenean mattis quis dui vel rhoncus. Nullam faucibus
        sollicitudin diam at lacinia. Quisque ex metus, vulputate sit amet
        imperdiet quis, euismod non nulla. Donec vitae euismod urna, a posuere
        augue. Curabitur aliquet, quam in luctus facilisis, orci justo
        consectetur turpis, nec efficitur eros arcu id dui. Praesent auctor
        justo nec tellus tincidunt gravida. Maecenas hendrerit dignissim odio
        quis faucibus. Maecenas in velit eu ante placerat venenatis quis non
        velit. Vivamus finibus quis nisl non imperdiet. In hac habitasse platea
        dictumst. Aenean sit amet dolor nec ligula pulvinar rhoncus eu in leo.
        Integer rhoncus orci pellentesque nunc ultrices auctor. Morbi malesuada,
        nisl vitae tristique condimentum, est diam tempor nisl, eget consequat
        dui nulla eu ligula. Sed in egestas elit. Nulla quis dictum ligula.
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Mauris venenatis posuere congue. Donec laoreet
        faucibus ligula, at posuere metus faucibus eu. Morbi varius velit odio,
        ac gravida purus consectetur vitae. Suspendisse magna nisi, fringilla eu
        elementum id, molestie at tellus. Donec iaculis aliquam elit, sed
        hendrerit massa porta sit amet. Proin sit amet nisi ac lectus aliquam
        congue eget ut risus. Suspendisse ac nisl lacinia massa sagittis
        condimentum non quis lorem. Curabitur velit lacus, sodales ut lectus eu,
        suscipit pellentesque libero. Morbi ultricies urna et sapien
        sollicitudin, eget aliquet leo malesuada. Cras et fringilla sem. Aliquam
        rhoncus, nulla in eleifend ultricies, nunc tellus rhoncus enim, ac
        vestibulum erat ex sit amet ante. Curabitur non velit at eros tempus
        venenatis ac ac purus. Ut id nisl nec dui cursus ullamcorper. Nullam
        facilisis ligula purus, maximus sagittis justo volutpat in. Etiam mollis
        enim gravida nunc posuere, sed laoreet enim porta. Integer sollicitudin
        scelerisque sem, ut aliquet leo bibendum sit amet.
      </div>
    </div>
  );
};

export { AboutPage };
