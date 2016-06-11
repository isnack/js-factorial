'use strict';

describe('FactorialService.js', function() {
    
    it('should calculate factorial from a given name', function() {
        expect(FactorialService.calculate(0)).toBe(1);
        expect(FactorialService.calculate(1)).toBe(1);
        expect(FactorialService.calculate(2)).toBe(2);
        expect(FactorialService.calculate(3)).toBe(6);
        expect(FactorialService.calculate(4)).toBe(24);
        expect(FactorialService.calculate(5)).toBe(120);
    });
        
});
    