//Lib
var Wizard = function() {
  this.magicLevel = 5;
  this.health = 2;

  this.castSpell = function() {
    if(this.magicLevel > 0 && this.health > 0) {
      this.magicLevel -= 1;
      return true;
    }
    else {
      return false;
    }
  };

  this.regenSpell = function() {
    this.magicLevel = 5;
  };

  this.regenHealth = function() {
    this.health = 2;
  };

  this.hit = function() {
    if(this.health > 0) {
      this.health -= 1;
      return true;
    }
    else {
      return false;
    }
  };
};

// test
var w;
describe("A wizard", function() {
  beforeEach(function() {
    w = new Wizard();
  });

  describe("#castSpell", function() {
    it("should return true if magicLevel is not 0", function() {
      assert.equal(true, w.castSpell());
    });

    it("should be able to cast 5 spells before running " +
       "magic", function() {
         assert.equal(5, w.magicLevel);
         for(var i = 0; i < 5; i++) {
           w.castSpell();
         }
         assert.equal(0, w.magicLevel);
       });
    it("should not be able to cast spells if magicLevel is 0", function() {
      for(var i = 0; i < 5; i++) {
        w.castSpell();
      }
      assert.equal(false, w.castSpell());
    });

    it("should not be able to cast spells if health is 0", function() {
      w.hit();
      w.hit();
      assert.equal(false, w.castSpell());
    });
  });

  describe("#regenSpell", function() {
    it("should regenerate magic level to 5", function() {
      // given
      w.castSpell();
      w.castSpell();

      //when
      w.regenSpell();

      //then
      assert.equal(5, w.magicLevel);
    });
  });

  describe("#hit", function() {
    it("should return true if wizard is undead", function() {
      assert.equal(true, w.hit());
    });

    it("should not be able to be hit more than 2 times", function() {
      w.hit();
      w.hit();
      assert.equal(false, w.hit());
    });

    it("should reduce the health by one when hit", function() {
      w.hit();
      assert.equal(1, w.health);
    })
  });

  describe("#regenHealth", function() {
    it("should set health to 2", function() {
      //given
      w.hit();
      w.hit();

      //when
      w.regenHealth();

      //then
      assert.equal(2, w.health);
    });
  });
});
